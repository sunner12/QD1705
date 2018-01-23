//循环广告窗口的实现
//1、将第一张图片添加在最后一张图片的后面
define(["jquery"], function($){
    var slide = function(){
        var aBtns = $("#play").find("ol").find("li");
        var oUl = $("#play").find("ul");
        var aLi = oUl.find("li");

        var iNow = 0;//当前显示图片的下标
        var timer = null;
        aBtns.click(function(){
            //点击按钮时，将图片的下表改成对应的按钮的下标
            iNow = $(this).index();
            tab();

        })

        function tab(){
            //现将当前按钮的class设为空
            aBtns.attr("class", "");
            //将点击的按钮的class设为有样式的名字
            aBtns.eq(iNow).attr("class", "active");
            //让ul去动
            oUl.animate({
                left: -1263 * iNow
            }, 500, function(){
               //
              //返回当前选择元素节点的个数
              //当达到最后一个图时重置
               if(iNow == aBtns.size()){
                    oUl.css("left", 0);
                    iNow = 0;
               }
            })
        }
        //设置定时器，让它循环播放
        function timerInner(){
            iNow++;
            tab();
            //将第一张图片添加在最后一张图片的后面
            if(iNow == aBtns.size()){
                aBtns.eq(0).attr("class", "active");
            }

        }
        timer = setInterval(timerInner, 2000);
        //添加移入移出事件
        oUl.hover(function(){
            clearInterval(timer);
        }, function(){
            timer = setInterval(timerInner, 2000);
        })

        return "这是循环广告的窗口代码";
    }
    return {
        slide: slide
    }
})