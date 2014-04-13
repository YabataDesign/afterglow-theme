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
   //      'js/*.js',
   //      '!js/scripts.min.js'
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
        }
      }
    },
    // uglify: {
    //   dist: {
    //     files: {
    //       'js/scripts.min.js': [
    //         'js/vendor/bootstrap.min.js',
    //         'js/vendor/user.js'
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
          'css/main.css'
        ]
      }
    },
    clean: {
      dist: [
        // 'js/scripts.min.js',
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
  grunt.registerTask('dev', [
    'watch'
  ]);

};
