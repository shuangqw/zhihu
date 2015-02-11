module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      dev: {
        files: '**/*',
        options: {
          livereload: true
        }
      }
    },

    connect: {
      dev: {
        options: {
          open: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['connect', 'watch']);

};