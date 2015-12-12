/* global require, console */
var gulp = require("gulp");
var watch = require("gulp-watch");
var uglify = require("gulp-uglify");
var csso = require("gulp-csso");
var sourcemaps = require("gulp-sourcemaps");
var autoprefixer = require("gulp-autoprefixer");
var sass = require("gulp-sass");
var imagemin = require("gulp-imagemin");

gulp.task("default", ["watch"]);
gulp.task("build", ["build:js", "build:css", "build:html", "build:images", "build:fonts", "build:favicon", "build:cname", "build:sw"]);

gulp.task("sass", function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ["Explorer >= 9", "last 3 versions", "> 2%"],
            cascalde: true
        }))
        .pipe(sourcemaps.write("./maps"))
        .on("error", console.error.bind(console))
        .pipe(gulp.dest("src/css"));
});

gulp.task("build:js", function() {
    return gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));
});

gulp.task("build:css", ["sass"], function() {
    return gulp.src("src/css/main.css")
        .pipe(csso())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("build:html", function() {
    return gulp.src("src/index.html")
        .pipe(gulp.dest("dist"));
});

gulp.task("build:images", function() {
    return gulp.src(["src/images/*", "src/images/**/*"])
        .pipe(imagemin({
            optimizationLevel: 7,
            progressive: true,
            interlaced: true
        }))
        .pipe(gulp.dest("dist/images/"));
});

gulp.task("build:fonts", function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"));
});

gulp.task("build:favicon", function() {
    return gulp.src("src/favicon.ico")
        .pipe(gulp.dest("dist"));
});

gulp.task("build:cname", function() {
    return gulp.src("src/CNAME")
        .pipe(gulp.dest("dist"));
});

gulp.task("build:sw", function() {
    return gulp.src("src/sw.js")
        .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
    gulp.watch(["src/scss/*.scss", "src/scss/imports/*.scss"], ["sass"]);
});
