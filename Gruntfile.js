module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		bower: {
			install: {
				options: {
					targetDir: './vendor',
					layout: 'byType',
					install: true,
					verbose: false,
					cleanTargetDir: false,
					cleanBowerDir: true,
					bowerOptions: {}
				}
			}
		}
	});

	// Load the plugin that provides the "grunt-bower-task" task.
	grunt.loadNpmTasks('grunt-bower-task');

	// Default task(s).
	grunt.registerTask('default', ['bower']);
};