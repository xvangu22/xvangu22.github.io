"use strict";
var gulp = require("gulp");
var sass = require("gulp-sass")(require("node-sass"));
var concat = require("gulp-concat");

gulp.task("sass", function () {
  return gulp
    .src("./assets/css/styles.scss")
    .pipe(concat("styles.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("sass:watch", function () {
  gulp.watch("./assets/css/styles.scss", gulp.series("sass"));
});
