//主文件。要在这里面调用一下主页面才能执行
console.log("载入成功");


//配置模块路径
require.config({
    paths: {
        //载入路径
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        // "parabola": "parabola",
        "index": "index"

    },
    //parabola有可能不遵从于   AMD
    shim:{
        //设置依赖关系
        "jquery-cookie": ["jquery"],
        "parabola": ["jquery"],
        //有可能不遵从时，exports是固定写法
         // "parabola": {
            // exports: "_"
        // }


    }
})

//引入模块，在回调函数中执行模块，此种index是主页面中的返回值
require(["index"], function(index){
      console.log(index.main());
})

require(["slide"], function(slide){
    console.log(slide.slide());
})

require(["move"], function(move){
    console.log(move.move());
})
