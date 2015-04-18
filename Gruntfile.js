module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed',
          sourceMap: true,
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }
      }
    },

    concat: {
      options: {
        banner: "/* Kanboard Javascript File */\n",
        sourceMap: true,
        separator: ";\n"
      },
      dist: {
        src: ['bower_components/modernizr/modernizr.js', 'bower_components/jquery/dist/jquery.js', 'bower_components/foundation/js/foundation.js', 'src/app.js'],
        dest: 'js/app.js'
      }
    },

    uglify: {
      kanboard: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    },

    watch: {
      grunt: {
        options: {
          reload: true
        },
        files: ['Gruntfile.js']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['sass', 'concat', 'uglify']);
  grunt.registerTask('default', ['build','watch']);
}
