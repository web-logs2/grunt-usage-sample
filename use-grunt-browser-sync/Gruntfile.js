module.exports = function (grunt) {

    grunt.initConfig({

        browserSync: {
            bsFiles: {
                src: 'css/*.css'
            },
            options: {
                server: {
                    baseDir: './',
                    index: 'index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.registerTask('default', ['browserSync']);

};