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
                tasks: ['browserify']
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
        }
    });

    grunt.registerTask('default', ['browserify']);
}
