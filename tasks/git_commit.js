/*
 * grunt-commit
 * 
 *
 * Copyright (c) 2016 Greg Sikorski
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    var git = require('simple-git')();

    grunt.registerTask('git_commit', 'Add files to upcoming git commit.', function () {
        var options = this.options();
        if (!options || !options.files) {
            return;
        }

        var done = this.async();

        grunt.log.writeln('Adding files "' + this.options().files + '" to the commit.');
        git.add(grunt.file.expand(this.options().files), done);
    });

};
