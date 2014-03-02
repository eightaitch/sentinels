module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json')
        , dev = pkg.devDependencies;

    // Automatically load grunt-* npm tasks
    grunt.util._.each(dev, function (ver, name) {
        if (/^grunt-/.test(name)) {
            grunt.loadNpmTasks(name);
        }
    });

    grunt.registerTask('log', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff . . .').ok();
    });
}
