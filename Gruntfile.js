module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		bower: {
			install: {
					options: {
					targetDir: './lib',
					layout: 'byComponent',
					install: true,
					verbose: false,
					cleanTargetDir: false,
					copy: true,
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