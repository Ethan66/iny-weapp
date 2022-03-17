
const gulp = require('gulp')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const eslint = require('gulp-eslint')
const postcss = require('gulp-postcss')
const cssFile = '../packages/**/*.scss'
const jsFile = '../packages/**/*.js'
const jsonFile = '../packages/**/*.json'
const wxmlFile = '../packages/**/*.wxml'
const wxsFile = '../packages/**/*.wxs'

function task_css () {
  return gulp
    .src(cssFile, { since: gulp.lastRun(task_css), allowEmpty: true })
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(postcss())
    .pipe(
      rename(path => {
        path.extname = '.wxss' 
      })
    )
    .pipe(gulp.dest('../dist/'))
    .pipe(gulp.dest('../example/dist/'))
}

function task_js () {
  return gulp
    .src(jsFile, { since: gulp.lastRun(task_js) ,allowEmpty: true })
    .pipe(eslint())
    .pipe(gulp.dest('../dist/'))
    .pipe(gulp.dest('../example/dist/'))
}

function task_json () {
  return gulp.src(jsonFile, { since: gulp.lastRun(task_json) ,allowEmpty: true }).pipe(gulp.dest('../dist/')).pipe(gulp.dest('../example/dist/'))
}

function task_wxml () {
  return gulp.src(wxmlFile, { since: gulp.lastRun(task_wxml) ,allowEmpty: true }).pipe(gulp.dest('../dist/')).pipe(gulp.dest('../example/dist/'))
}

function task_wxs () {
  return gulp.src(wxsFile, { since: gulp.lastRun(task_wxs) ,allowEmpty: true }).pipe(gulp.dest('../dist/')).pipe(gulp.dest('../example/dist/'))
}


function task_watch () {
  gulp.watch(cssFile, task_css)
  gulp.watch(wxsFile, task_wxs)
  gulp.watch(jsFile, task_js)
  gulp.watch(jsonFile, task_json)
  gulp.watch(wxmlFile, task_wxml)
}

gulp.task(
  'default',
  gulp.parallel(
    task_css,
    task_wxs,
    task_js,
    task_json,
    task_wxml,
    task_watch
  )
)
