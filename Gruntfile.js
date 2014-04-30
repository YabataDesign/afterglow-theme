'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   // jshint: {
   //    options: {
   //      jshintrc: '.jshintrc'
   //    },
   //    all: [
   //      'Gruntfile.js',
   //      'scripts/*.js',
   //      '!scripts/scripts.min.js'
   //    ]
   //  },
    less: {
      dist: {
        files: {
          'css/main.css': [
            'less/main.less'
          ]
        },
        options: {
          compress: true,
          sourceMap: true,
          sourceMapFilename: 'css/main.css.map',
          sourceMapRootpath: '/'
        }
      }
    },
    // uglify: {
    //   dist: {
    //     files: {
    //       'scripts/scripts.min.js': [
    //         'scripts/vendor/bootstrap.min.js',
    //         'scripts/vendor/user.js'
    //       ]
    //     },
    //     options: {
    //     }
    //   }
    // },
    watch: {
      less: {
        files: [
          'less/*.less',
          'less/bootstrap/*.less'
        ],
        tasks: ['less']
      },
      // js: {
      //   files: [
      //     '<%= jshint.all %>'
      //   ],
      //   tasks: ['jshint', 'uglify']
      // },
      livereload: {
        options: {
          livereload: true
        },
        files: [
          // 'js/scripts.min.js',
          'css/main.css',
          'index.html'
        ]
      }
    },
    clean: {
      dist: [
        // 'scripts/scripts.min.js',
        'css/main.css'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    // 'uglify',
    'watch'
  ]);

};
