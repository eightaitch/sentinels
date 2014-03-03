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
            options: {
                livereload: true
            },
            react: {
                files: 'src/react/*.jsx',
                tasks: ['browserify'],
            },
            scripts: {
                files: 'src/js/*.js',
                tasks: ['browserify'],
            },
            data: {
                files: 'data/**/*.js',
                tasks: ['browserify'],
            },
            styles: {
                files: 'src/less/*.less',
                tasks: ['less'],
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
                    'build/sentinels.css': 'src/less/sentinels.less'
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify']);
}
