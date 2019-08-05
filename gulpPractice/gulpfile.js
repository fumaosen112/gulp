// var gulp = require("gulp");
// var concat=require("gulp-concat");
// var uglify=require('gulp-uglify');
// var rename=require('gulp-rename');
// var mycss=require("gulp-minify-css");
// var imgmin=require("gulp-imagemin");
// var connect=require("gulp-connect");
// gulp.task("copy-html",function(){
// 	// gulp.src("index.html").pipe(gulp.dest("dist"));
// 	// gulp.src("index.html")
// 	// .pipe(gulp.dest("E:\\WWW\\0000\\GULP"));
		// gulp.src('xm/mylife/*')
		// .pipe(gulp.dest("E:\\WWW\\APxm\\mylife"))
		// gulp.src('xm/mylife/*.html')
		// .pipe(gulp.dest("E:\\WWW\\APxm\\mylife"));

// 		gulp.src('xm/font/*')
// 		.pipe(gulp.dest("E:\\WWW\\APxm\\font"));

// 		gulp.src("xm/img/*.{jpg,png}")
// 	.pipe(gulp.dest("E:\\WWW\\APxm\\img"));

// 	gulp.src("xm/img2/*.{jpg,png}")
// 	.pipe(gulp.dest("E:\\WWW\\APxm\\img2"));

// 	gulp.src("xm/img3/*.{jpg,png}")
// 	.pipe(gulp.dest("E:\\WWW\\APxm\\img3"));

// 	gulp.src("xm/json/*.json")
// 	.pipe(gulp.dest("E:\\WWW\\APxm\\json"));

// gulp.src('xm/css/*.css')
// .pipe(gulp.dest("E:\\WWW\\APxm\\css"));

// gulp.src('xm/js/*')
// .pipe(gulp.dest("E:\\WWW\\APxm\\js"));



// });
// gulp.task("js",function(){
// 	gulp.src(['xm/js/动画.js','xm/js/ajax.js',"xm/js/jquery-1.11.0.js","xm/js/lun2.js","xm/js/nav.js","xm/js/play.js","xm/js/regTools.js"])
// 			.pipe(concat('tools.js'))
// 			.pipe(gulp.dest("E:/WWW\\APxm\\js"))
// 			.pipe(uglify())
// 			.pipe(rename('tools.min.js'))
// 			.pipe(gulp.dest("E:\\WWW\\APxm\\js"));


// });

// gulp.task("sass",function(){
// 			gulp.src('xm/css/*.css')
// 			.pipe(mycss())
// 			.pipe(rename("hsxm.min.css"))
// 			.pipe(gulp.dest("E:\\WWW\\APxm\\css"));
	
// 	});

// gulp.task("copy-img",()=>{
// 	gulp.src("img/*.jpg")
// 	.pipe(gulp.dest("E:\\WWW\\0000\\img2"));
// });

// gulp.task("script",function(){
// 	gulp.src(["index/ava.js","index/bvb.js"])
// 		.pipe(concat('con3.js'))
// 		.pipe(gulp.dest("E:\\WWW\\0000\\js"));
// });
// gulp.task("tall",function(){
// 	gulp.src(["index/ava.js","index/bvb.js"])
// 	.pipe(concat('con1.js'))
// 	.pipe(uglify())
// 	.pipe(gulp.dest("E:\\WWW\\0000\\js"));

// });
// gulp.task("rename",function(){
// 	gulp.src(["index/ava.js","index/bvb.js"])
// 	.pipe(concat('con4.js'))
// 	.pipe(gulp.dest("E:\\WWW\\0000\\js"))
// 	.pipe(uglify())
// 	.pipe(rename("con4.min.js"))
	
// 	.pipe(gulp.dest("E:\\WWW\\0000\\js"));

// });
// gulp.task("sass",function(){
// 		gulp.src('css/*.css')
		
// 		.pipe(mycss())
// 		.pipe(rename("nav.min.js"))
// 		.pipe(gulp.dest("E:\\WWW\\0000\\css"));

// });
// gulp.task('imgmin',function(){
// 	gulp.src("img/*.jpg")
// 	.pipe(imgmin())
// 	.pipe(gulp.dest("E:\\WWW\\0000\\img2"));
// });
// gulp.task("server",function(){
// 	connect.server({
// 		root:'E:\\WWW',
// 		livereload:true
// 	});
// });



let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
let rename = require('gulp-rename');
let mincss = require('gulp-minify-css');
let minimg = require('gulp-imagemin');
let connect = require('gulp-connect');
// let babel = require('gulp-babel');
let sass=require("gulp-sass");
let babel = require("gulp-babel");


// 监听
gulp.task("watchall",async ()=>{
	gulp.watch('xm/mylife/*.html',async ()=>{
		gulp.src('xm/mylife/*.html')
		.pipe(gulp.dest("E:\\WWW\\APxm\\mylife"));
	});

	gulp.watch('xm/mylife/*.php',async ()=>{
		gulp.src('xm/mylife/*.php')
		.pipe(gulp.dest("E:\\WWW\\APxm\\mylife"));
	});

	gulp.watch("xm/js/*", async ()=>{
		gulp.src("xm/js/*.js")
		// .pipe(concat('tools.js'))
		.pipe(gulp.dest("E:/WWW\\APxm\\js"))
		// .pipe(babel({
		// 	presets:['ES2015']
		// }))
		// .pipe(uglify())
		// .pipe(rename('tools.min.js'))
		// .pipe(gulp.dest("E:\\WWW\\APxm\\js"));
	});

	gulp.watch('xm/font',async ()=>{
		gulp.src('xm/font/*')
		.pipe(gulp.dest("E:\\WWW\\APxm\\font"));
	});

	gulp.watch("xm/css/*.css",async ()=>{
		gulp.src("xm/css/*.css")
		.pipe(mincss())
		.pipe(gulp.dest("E:\\WWW\\APxm\\css"));
	});

	gulp.watch("xm/img/*.{jpg,png}",async ()=>{
		gulp.src("xm/img/*.{jpg,png}")
		.pipe(minimg())
		.pipe(gulp.dest("E:\\WWW\\APxm\\img"));
	});


	gulp.watch("xm/img2/*.{jpg,png}",async ()=>{
		gulp.src("xm/img2/*.{jpg,png}")
		.pipe(minimg())
		.pipe(gulp.dest("E:\\WWW\\APxm\\img2"));

	});
	gulp.watch("xm/img3/*.{jpg,png}",async ()=>{
		gulp.src("xm/img3/*.{jpg,png}")
		.pipe(minimg())
		.pipe(gulp.dest("E:\\WWW\\APxm\\img3"));

	});

	gulp.watch("xm/json/*",async ()=>{
		gulp.src("xm/json/*.json")
		.pipe(minimg())
		.pipe(gulp.dest("E:\\WWW\\APxm\\json"));

	});
	gulp.watch('xm/lol.scss',async()=>{
		gulp.src('xm/lol.scss')
		.pipe(sass())
		.pipe(gulp.dest("E:\\WWW\\APxm\\css2"));
	})
});


