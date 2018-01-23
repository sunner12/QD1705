define(["jquery"], function($){
    var move = function(){

        var aLis = $(".phone .ph_list").find("li");
        for(var i = 0; i < aLis.length; i++){
            aLis[i].style.left = aLis[i].offsetLeft + "px";
            aLis[i].style.top = aLis[i].offsetTop + "px";
        }
        for(var i = 0; i < aLis.length; i++){
            aLi[i].style.position = "absolute";
        }
        for(var i = 0; i < aLis.length; i++){

            aLis[i].mouseenter({

            })

        }
        return "执行成功";
    }
    return {
        move: move
    }
})