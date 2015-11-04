module.exports = function (grunt) {
  grunt.initConfig({
    watch: {
      src: {
        files: ['**/*.scss', '**/src/*.js', '**/*.php'],
        tasks: ['compass:dev', 'uglify']
      },
      options: {
        livereload: true
      }
    },
    php: {
      dist: {
        options: {
          port: 8080,
          silent: true,
          open: true,
          hostname: 'localhost'
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'assets/js/min/app.min.js': ['assets/js/src/app.js']
        }
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'assets/scss',
          cssDir: 'assets/css',
          imagesPath: 'assets/img',
          noLineComments: false,
          outputStyle: 'compressed'
          //outputStyle: 'expanded',
          //outputStyle: 'nested',
          //outputStyle: 'compact
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-php');

  grunt.registerTask('phpwatch', ['php:dist', 'watch']);
};
