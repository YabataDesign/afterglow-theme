'use strict';
module.exports = function(grunt) {

  // show elapsed time at the end
  require('time-grunt')(grunt);

  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          sourceMap: true,
          outputStyle: 'compressed', // nested, compressed
        },
        files: {
          'css/main.css': 'sass/main.scss'
        }
      }
    },
    notify: {
      sass: {
        options: {
          message: 'SASS compile OK'
        }
      },
      uncss: {
        options: {
          message: 'Uncss clean OK'
        }
      },
      imagemin: {
        options: {
          message: 'Images minify OK'
        }
      }
    },
    watch: {
      sass: {
        files: [
          'sass/*.scss',
          'sass/bootstrap/**/*.scss'
        ],
        tasks: ['sass', 'notify:sass']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          'css/main.css',
          'index.html'
        ]
      }
    },
    clean: {
      dev: [
        'css/main.css'
      ],
      dist: [
        'css/clean.css'
      ]
    },
    uncss: {
      dist: {
        options: {
          ignore: ['#background'],
          ignoreSheets: [/fonts.googleapis/],
        },
        files: {
          'css/clean.css': ['index.html']
        }
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'img/dev/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/dist/'
        }]
      }
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register tasks
  grunt.registerTask('default', [
    'clean:dev',
    'sass',
    'notify:sass',
    'watch'
  ]);
  grunt.registerTask('dist', [
    'clean:dist',
    'uncss:dist',
    'notify:uncss',
    'imagemin',
    'notify:imagemin'
  ]);

};
