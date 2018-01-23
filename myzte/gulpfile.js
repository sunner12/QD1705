const gulp = require("gulp");

//然后，整理html文件，需在html中建立index.html
gulp.task("copy-html", function(){
    //找到当前源文件，获取当前路径
    return gulp.src("html/*.html")
    //目标路径，计算机生成dist文件，并将html中的，index.html文件拷贝到其中
    .pipe(gulp.dest("dist"))
    //监听到，任务区执行他，并实时刷新
    .pipe(connect.reload());
})
//调用gulp copy-html
//-----------------------------------------------------------------------
//3、
//整理image
gulp.task("images", function(){
    return gulp.src("images/**/*")
    .pipe(gulp.dest("dist/images"))//copy到dist文件夹下的images文件夹里
    .pipe(connect.reload());
})

//------------------------------------------------------------------------
//整理js
gulp.task("scripts", function(){
    return gulp.src("js/*.js")
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());//监听到任务，并实时刷新
})
//------------------------------------------------------------------------
//整理scss，，先下载此三个然后执行gulp-css
//通过require，引入该插件
var scss = require("gulp-sass-china");
var minify = require("gulp-minify-css");
var rename = require("gulp-rename");
//主页面
gulp.task("index-scss", function(){
    return gulp.src("scss/index.scss")
    .pipe(scss())//转成css
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())//压缩
    .pipe(rename("index.min.css"))//压缩后的css命名
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
//循环广告窗口
gulp.task("slide-scss", function(){
    return gulp.src("scss/slide.scss")
    .pipe(scss())//转成css
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())//压缩
    .pipe(rename("slide.min.css"))//压缩后的css命名
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})
gulp.task("slidebar-scss", function(){
    return gulp.src("scss/slidebar.scss")
    .pipe(scss())//转成css
    .pipe(gulp.dest("dist/css"))
    .pipe(minify())//压缩
    .pipe(rename("slidebar.min.css"))//压缩后的css命名
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload());
})

//--------------------------------------------------------------------------------
gulp.task("data", function(){
    return gulp.src("data/*.json")
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//--------------------------------------------------------------------------------

//通过一个任务执行多个任务
gulp.task("build", ["data", "images", "copy-html", "scripts", "index-scss", "slide-scss", "slidebar-scss"], function(){
    console.log("编译完成");
})
//-------------------------------------------------------------------------------
//对所有数据进行监听
gulp.task("watch", function(){
    //监听的路径
    gulp.watch("data/*.json", ["data"]);
    gulp.watch("js/*.js", ["scripts"]);
    gulp.watch("scss/index.scss", ["index-scss"]);
    gulp.watch("scss/slide.scss", ["slide-scss"]);
    gulp.watch("scss/slidebar.scss", ["slidebar-scss"]);
    gulp.watch("images/**/*", ["images"]);
    gulp.watch("html/*.html", ["copy-html"]);

})
//-------------------------------------------------------------------------------
//引入该插件，通过connect启动一个服务器
var connect = require("gulp-connect");
//创建任务
gulp.task("server", function(){
    connect.server({
        root: "dist",//下载dist里所有
        port: 8888,//设置端口号
        livereload: true //实时刷新
    })
})
//------------------------------------------------------------------------------
//设置默认任务,意思是写个gulp就能进行监听跟实时刷新
gulp.task("default", ["watch", "server"]);