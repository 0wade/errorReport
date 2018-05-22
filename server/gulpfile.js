var gulp = require("gulp");
var sftp = require('gulp-sftp');

gulp.task('build:test', function () { //发布
    return gulp.src(['./**/**', '.babelrc', '!node_modules/**/**']).pipe(sftp({
        host: '10.40.2.186',
        port: '22',
        user: 'root',
        pass: 'PkKgX8bA',
        remotePath: '/data/deploy/baoko/error-report-server'
    }));
});
