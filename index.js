'use strict';

let fs = require('fs'),
    through = require('through2');

module.exports = (atime, mtime) => {
    return through.obj((file, _enc, cb) => {
        //If a date is not passed, we default to the current date/time. Using the exact same date/time for both.
        let now = new Date();

        return cb(null, fs.utimes(file.path, atime || now, mtime || now, () => {}));
    });
};
