/*
 * grunt-img-sprite
 * 
 *
 * Copyright (c) 2015 liyh
 * Licensed under the MIT license.
 */

'use strict';

var sprite = require('img-sprite');

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('img_sprite', 'images sprite', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options({
                src: [],
                dest: './',
                output: './',
                imgPath: '../images/',
                prefix: 'sprite-',
                retina: true,
                algorithm: 'binary-tree',
                padding: 10,
                media: 'only screen and (-webkit-min-device-pixel-ratio: 1.5)'
            }),
            that = this;

        options.doneFn = this.async();

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            // Concat specified files.
            options.src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            });

            options.dest = f.dest;

            sprite(options);

        });
    });
};