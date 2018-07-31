# gulp-set-timestamp
Sets accessed and modified timestamps in files after the file is written to its destination.

This is inspired by Bernd Matzner's [gulp-touch-cmd](https://github.com/bmatzner/gulp-touch-cmd) but allows for passing in the date to be set. If you only need to update the timestamp to the current date/time, you may just want to use [gulp-touch-cmd](https://github.com/bmatzner/gulp-touch-cmd) instead or pass in a new date (see examples).

## Install
`npm i gulp-set-timestamp` or `npm i --save-dev gulp-set-timestamp` for a dev dependency.

## Examples

### Touch the File / Use Current Date

If dates are not passed, the current date/time will be used for both last accessed and last modified time. This is essentially the functionality that a touch provides.

```js
let gulp = require('gulp'),
    setTimeStamp = require('gulp-set-timestamp');

gulp.task('default', () => {
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./dest'))
        .pipe(setTimeStamp());
});
```

### Use Date for Both Files

Sets a date for both last accessed and last modified.

```js
let gulp = require('gulp'),
    setTimeStamp = require('gulp-set-timestamp');

gulp.task('default', () => {
    gulp.src('./src/**/*')
        .pipe(gulp.dest('./dest'))
        .pipe(setTimeStamp(new Date('2018-07-31T00:00:00'), new Date('2018-01-01T00:00:00')));
});
```

## Misc Notes
I followed the [gulp guidelines](https://github.com/gulpjs/gulp/blob/master/docs/writing-a-plugin/guidelines.md) to create this plugin "the gulp way". If something is amiss, please open an issue, and I'll be happy to follow up.

Tests still need to be added. 
