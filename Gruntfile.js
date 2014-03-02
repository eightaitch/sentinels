module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json')
        , dev = pkg.devDependencies;

    // Automatically load grunt-* npm tasks
    grunt.util._.each(dev, function (ver, name) {
        if (/^grunt-/.test(name)) {
            grunt.loadNpmTasks(name);
        }
    });

    grunt.initConfig({
        watch: {
            scripts: {
                files: 'src/*.jsx',
                tasks: ['browserify'],
                options: {
                    livereload: true
                }
            },
            styles: {
                files: 'src/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        },
        browserify: {
            options: {
                transform: [require('grunt-react').browserify]
            },
            app: {
                src: 'index.jsx',
                dest: 'build/sentinels.js'
            }
        },
        less: {
            development: {
                files: {
                    'build/sentinels.css': 'src/sentinels.less'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify']);
}
