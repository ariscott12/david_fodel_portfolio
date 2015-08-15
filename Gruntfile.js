module.exports = function(grunt) {
    //  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    grunt.initConfig({

        sass: {
            dist: {

                files: {
                    "sites/all/themes/minim/css/main.css": "sites/all/themes/minim/sass/main.scss",
                },
                options: { // Target options
                    includePaths: require("node-neat").includePaths,
                    style: "compact"

                }
            }
        },
        watch: {
            sass: {
                files: [
                    "sites/all/themes/minim/sass/main.scss"
                ],
                tasks: "sass"
            },
        }
    });

    //Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
  
    //Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask("default", ["watch"]);



};