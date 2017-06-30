// Karma configuration
// Generated on Thu Jun 29 2017 17:22:31 GMT+1000 (AUS Eastern Standard Time)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    plugins: [
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-chai',
      'karma-typescript',
      'karma-chrome-launcher',
      'karma-typescript-preprocessor',
      'karma-coverage',
      'karma-typescript-es6-transform'
    ],

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'karma-typescript', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      'test/*.js', 'test/*.spec.ts', 'test/*.ts', 'src/*.ts'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/*.ts': ['karma-typescript', 'coverage'],
      'test/*.spec.ts': ['karma-typescript']
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'karma-typescript', 'mocha'],

    karmaTypescriptConfig: {
      bundlerOptions: {
        transforms: [require('karma-typescript-es6-transform')()]
      }
    },

    typescriptPreprocessor: {
      // options passed to the typescript compiler
      options: {
        sourceMap: false, // (optional) Generates corresponding .map file.
        target: 'ES2015', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
        module: 'commonjs', // (optional) Specify module code generation: 'commonjs' or 'amd'
        noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
        noResolve: true, // (optional) Skip resolution and preprocessing.
        removeComments: true, // (optional) Do not emit comments to output.
        concatenateOutput: false, // (optional) Concatenate and emit output to single file. By default true if module option is omited, otherwise false.
        /* Strict Type-Checking Options */
        strict: true,                        /* Enable all strict type-checking options. */
        strictNullChecks: true,              /* Enable strict null checks. */
        noImplicitThis: true,                /* Raise error on 'this' expressions with an implied 'any' type. */
        alwaysStrict: true,                  /* Parse in strict mode and emit "use strict" for each source file. */
        // /* Additional Checks */
        noUnusedLocals: true,                /* Report errors on unused locals. */
        noUnusedParameters: true,            /* Report errors on unused parameters. */
        noImplicitReturns: true,             /* Report error when not all code paths in function return a value. */
        noFallthroughCasesInSwitch: true,    /* Report errors for fallthrough cases in switch statement. */
        types: ['mocha', 'chai']
      },
      // transforming the filenames
      transformPath: function (path) {
        return path.replace(/\.ts$/, '.js')
      }
    },

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
       //  expose: ['body'] // This will be exposed in a reporter as `result.mocha.body`
      }
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
