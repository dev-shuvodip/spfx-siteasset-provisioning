'use strict';
var gulp = require('gulp');

var run = require('gulp-run')

var spsave = require('gulp-spsave');

const build = require('@microsoft/sp-build-web');

build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

// ----------------- gulp task to run bundle in angular component ------------------

gulp.task('start', function() {
  return run('npm run bundle --prefix /home/shuvodipray/Documents/Dev/TimeSheetApplication/timesheetcomponents').exec();
    // .pipe(gulp.dest('./output'));      
});

// ----------------- gulp task to upload files to SharePoint SiteAssets -----------------

var coreOptions = {
  siteUrl: 'https://pphackathonteam5.sharepoint.com/sites/TimesheetApplication',
  folder: 'SiteAssets',
  checkin: true,
  checkinType: 1,
  flatten: false,
  notification: true
};
var creds = {
  username: 'shuvodip@pphackathonteam5.onmicrosoft.com',
  password: 'Password1'
};

gulp.task("save", function () {
  return gulp.src("../timesheetcomponents/HTMLPage/common.js")
    .pipe(spsave(coreOptions, creds));
});

build.initialize(gulp);