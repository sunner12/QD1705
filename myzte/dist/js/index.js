//主页代码
//首先引入路径
define(["jquery", "jquery-cookie"], function($){
    var main = function(){
        $(function(){

            //今日抢购部分
            $.ajax({
                mefthod: "GET",
                url: "../data/newDay.json",
                success: function(data){
                    var html = "";
                    for(var i = 0; i < data.length; i++){
                        html += `<div class = "img_left">
                                    <a href="https://www.myzte.com/axon-m.html" target = "_blank">
                                        <img src="${data[i].img}" alt="今日推荐">
                                    </a>
                                </div>`
                    }
                    $(".newDay").html(html);
                }
            })

            //加载手机专区
            $.ajax({
                method: "GET",
                url: "../data/data.json",
                success: function(data){
                    //data是json对象里面有很多数据
                    var html = "";
                    var html1 = "";
                    for(var i = 0; i < data.length; i++){
                       //将所有的数据添加到页面当中
                        html += `<li>
                                    <a href="" target = "_blank">
                                        <div class = "img">
                                             <img src="${data[i].img}" alt="手机">
                                        </div>
                                        <h6>${data[i].title}</h6>
                                        <h6>${data[i].describe}</h6>
                                        <b>${data[i].price}</b>
                                    </a>
                                </li>`;
                    }
                    html1 = `<a href="" target = "_blank">
                                <img src="../images/c804472a8195.jpg" alt="手机">
                            </a>`;
                    $(".phone .ph_left").html(html1);
                    $(".phone .ph_list").html(html);

                }
            })


            //手机专区部分
            $.ajax({
                method: "GET",
                url: "../data/data1.json",
                success: function(data){
                    //data是json对象里面有很多数据
                    var html = "";
                    var html1 = "";
                    for(var i = 0; i < data.length; i++){
                       //将所有的数据添加到页面当中
                        html += `<li>
                                    <a href="" target = "_blank">
                                        <div class = "img">
                                             <img src="${data[i].img}" alt="手机">
                                        </div>
                                        <h6>${data[i].title}</h6>
                                        <b>${data[i].price}</b>
                                    </a>
                                </li>`;
                    }
                    html1 = `<a href="" target = "_blank">
                                <img src="../images/dee722f6a754.jpg" alt="手机">
                            </a>`;
                    $(".phone1 .ph_left1").html(html1);
                    $(".phone1 .ph_list1").html(html);

                }
            })
            //配件专区部分
            $.ajax({
                method: "GET",
                url: "../data/data2.json",
                success: function(data){
                    //data是json对象里面有很多数据
                    var html = "";
                    var html1 = "";
                    for(var i = 0; i < data.length; i++){
                       //将所有的数据添加到页面当中
                        html += `<li>
                                    <a href="" target = "_blank">
                                        <div class = "img">
                                             <img src="${data[i].img}" alt="手机">
                                        </div>
                                        <h6>${data[i].title}</h6>
                                        <b>${data[i].price}</b>
                                    </a>
                                </li>`;
                    }
                    html1 = `<a href="" target = "_blank">
                                <img src="../images/watch.jpg" alt="watch">
                            </a>`;
                    $(".phone2 .ph_left2").html(html1);
                    $(".phone2 .ph_list2").html(html);

                }
            })
            //下面大图部分
            $.ajax({
                method: "GET",
                url: "../data/bottom_bg.json",
                success: function(data){
                    var html = "";
                    html = `<div>
                                <img src="${data[0].img}" alt="">
                            </div>`;
                    $(".bottom_bg").html(html);
                }

            })

            //天机系列的移入移出导航栏
            $.ajax({
                method: "GET",
                url: "../data/data.json",
                success: function(data){
                    // alert(data[0].img);
                    //data是json对象里面有很多数据
                    var html = "";
                    for(var i = 0; i < 4; i++){
                       //将所有的数据添加到页面当中
                        html += `<a href="#">
                                    <li>
                                        <img src="${data[i].img}" alt="" />
                                    </li>
                                    <p>${data[i].title}</p>
                                    <p>${data[i].price}</p>
                                </a>`;
                    }

                    $(".nav_1").html(html);

                }
            })
            //天机系列移入移出
            var aLi = $(".nav1").find(".hPage").find("ul").find(".hover");
            aLi.mouseenter(function(){
                $(".nav_1").stop().slideDown(50);
            });
            aLi.mouseleave(function(){
                $(".nav_1").stop().slideUp(50);
            });
            $(".nav_1").mouseenter(function(){
                $(".nav_1").stop().slideDown(50);
            });
            $(".nav_1").mouseleave(function(){
                $(".nav_1").stop().slideUp(50);
            });

            //BLADE系列的移入移出导航栏
            $.ajax({
                method: "GET",
                url: "../data/data.json",
                success: function(data){
                    // alert(data[0].img);
                    //data是json对象里面有很多数据
                    var html = "";
                    for(var i = 3; i < 6; i++){
                       //将所有的数据添加到页面当中
                        html += `<a href="#">
                                    <li>
                                        <img src="${data[i].img}" alt="" />
                                    </li>
                                    <p>${data[i].title}</p>
                                    <p>${data[i].price}</p>
                                </a>`;
                    }

                    $(".nav_2").html(html);

                }
            })
            //开头导航栏BLADE系列移入移出
            var aLi = $(".nav1").find(".hPage").find("ul").find(".hover1");
            aLi.mouseenter(function(){
                $(".nav_2").stop().slideDown(50);
            });
            aLi.mouseleave(function(){
                $(".nav_2").stop().slideUp(50);
            });
            $(".nav_2").mouseenter(function(){
                $(".nav_2").stop().slideDown(50);
            });
            $(".nav_2").mouseleave(function(){
                $(".nav_2").stop().slideUp(50);
            });

            //右边侧栏移入移出
            var oLi = $(".slidebar").find(".box");
            var oDiv = $(".slidebar").find("li").find(".sBox");
            oLi.mouseenter(function(){
                oDiv.stop().animate({top: -54});
                $(".ewm").stop().show(500);
            })
            oLi.mouseleave(function(){
                oDiv.stop().animate({top: 0});
                $(".ewm").stop().hide(500);
            })
            var oLi1 = $(".slidebar").find(".box1");
            var oDiv1 = $(".slidebar").find("li").find(".sBox1");
            oLi1.mouseenter(function(){
                oDiv1.stop().animate({top: -54});
            })
            oLi1.mouseleave(function(){
                oDiv1.stop().animate({top: 0});
            })
            var oLi2 = $(".slidebar").find(".box2");
            var oDiv2 = $(".slidebar").find("li").find(".sBox2");
            oLi2.mouseenter(function(){
                oDiv2.stop().animate({top: -54});
            })
            oLi2.mouseleave(function(){
                oDiv2.stop().animate({top: 0});
            })
        })
        return "main函数执行成功";
    }
    return {
        main: main
    }
})