/*
 * grunt-img-sprite
 * 
 *
 * Copyright (c) 2015 liyh
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        clean: {
            tests: ['test/tmp/*']
        },

        img_sprite: {
            options: {
                output: 'test/tmp/',
                imgPath: '../images/',
                prefix: 'sprite-',
                retina: true,
                algorithm: 'binary-tree',
                padding: 10
            },
            single: {
                src: 'test/fixtures/css/main.css',
                dest: 'test/tmp/single/css/dest.css'
            },
            multi: {
                src: ['test/fixtures/css/one.css', 'test/fixtures/css/two.css'],
                dest: 'test/tmp/multi/css'
            }
        },
        mochacli: {
            options: {
                files: 'test/*.js'
            },
            spec: {
                options: {
                    reporter: 'spec'
                }
            }
        },

    });

    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mocha-cli');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', ['jshint', 'clean', 'img_sprite:single', 'img_sprite:multi', 'mochacli:spec']);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};