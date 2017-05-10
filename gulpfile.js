// Include gulp
var gulp = require('gulp');

// Plugins
const shell = require('gulp-shell');
var exec = require('gulp-exec');
var run = require('gulp-run');
var clean = require('gulp-clean');

// Settings
process.chdir('../../');

gulp.task('Console - Clear Cache', shell.task([
    'sh vendor/bo/t3toolbox/lib/console_clear_cache.sh'
]));

gulp.task('Console - Dump Local Database', shell.task([
    'sh vendor/bo/t3toolbox/lib/console_dump_local.sh'
]));

gulp.task('Console - Update database schema', shell.task([
    'sh vendor/bo/t3toolbox/lib/console_updateschema.sh'
]));

gulp.task('Sync - Develop Database', shell.task([
    'sh vendor/bo/t3toolbox/lib/sync_develop_database.sh'
]));
