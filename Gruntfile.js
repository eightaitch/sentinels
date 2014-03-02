module.exports = function(grunt) {

    grunt.registerTask('log', 'Log some stuff.', function() {
        grunt.log.write('Logging some stuff . . .').ok();
    });
}
