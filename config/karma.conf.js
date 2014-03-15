module.exports = function(config){
  config.set({
    basePath : '../',

    files : [
      'source/js/vendor/angular/angular.min.js',
      'source/js/vendor/angular/angular-*.js',
      'source/js/**/*.js',
      'test/unit/**/*.js'
    ],

    exclude : [
      'source/js/vendor/angular/angular-loader.js',
      'source/js/vendor/angular/angular-scenario.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-script-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }
  });
};