module.exports = function (config) {
  config.set({
    //root path location to resolve paths defined in files and exclude
    basePath: '',
    //files/patterns to exclude from loaded files
    exclude: [],
    //files/patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      { pattern: 'tests/*.js', watched: true, served: true, included: true }
      /*parameters:
          watched: if autoWatch is true all files that have watched set to true will be watched for changes
          served: should the files be served by Karma's webserver?
          included: should the files be included in the browser using <script> tag?
          nocache: should the files be served from disk on each request by Karma's webserver? */
      /*assets:
          {pattern: '*.html', watched:true, served:true, included:false}
          {pattern: 'images/*', watched:false, served:true, included:false} */
    ],

    //executes the tests whenever one of the watched files changes
    autoWatch: true,
    //if true, Karma will run tests and then exit browser
    singleRun: false,
    //if true, Karma fails on running empty test-suites
    failOnEmptyTestSuite: false,
    //reduce the kind of information passed to the bash
    logLevel: config.LOG_WARN, //config.LOG_DISABLE, config.LOG_ERROR, config.LOG_INFO, config.LOG_DEBUG

    //list of frameworks you want to use, only jasmine is installed automatically
    frameworks: ['jasmine-jquery', 'jasmine'],
    //list of browsers to launch and capture
    browsers: ['PhantomJS' /*,'Chrome','Firefox','Edge','ChromeCanary','Opera','IE','Safari'*/ ],
    //list of reporters to use
    reporters: ['mocha', 'kjhtml'/*,'dots','progress','spec'*/],

    //address that the server will listen on, '0.0.0.0' is default
    listenAddress: '0.0.0.0',
    //hostname to be used when capturing browsers, 'localhost' is default
    hostname: 'localhost',
    //the port where the web server will be listening, 9876 is default
    port: 9876,
    //when a browser crashes, karma will try to relaunch, 2 is default
    retryLimit: 0,
    //how long does Karma wait for a browser to reconnect, 2000 is default
    browserDisconnectTimeout: 5000,
    //how long will Karma wait for a message from a browser before disconnecting from it, 10000 is default
    browserNoActivityTimeout: 10000,
    //timeout for capturing a browser, 60000 is default
    captureTimeout: 60000,

    client: {
      //capture all console output and pipe it to the terminal, true is default
      captureConsole: false,
      //if true, Karma clears the context window upon the completion of running the tests, true is default
      clearContext: false,
      //run the tests on the same window as the client, without using iframe or a new window, false is default
      runInParent: false,
      //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
      useIframe: true,
      jasmine: {
        //tells jasmine to run specs in semi random order, false is default
        random: false
      }
    },

    /* karma-webpack config
       pass your webpack configuration for karma
       add `babel-loader` to the webpack configuration
       to make the ES6+ code readable by the browser */
    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /(node_modules)/,
            loader: 'babel-loader?plugins=babel-plugin-rewire',
            options: {
              presets: ['@babel/preset-env'],
              plugins: [ 'babel-plugin-rewire' ]
            }
          },
          {
              test: /\.(scss|css)$/,
              use: [
                  {
                      // creates style nodes from JS strings
                      loader: "style-loader",
                      options: {
                          sourceMap: true
                      }
                  },
                  {
                      // translates CSS into CommonJS
                      loader: "css-loader",
                      options: {
                          sourceMap: true
                      }
                  },
                  {
                      // compiles Sass to CSS
                      loader: "sass-loader",
                      options: {
                          outputStyle: "expanded",
                          sourceMap: true,
                          sourceMapContents: true
                      }
                  }
                  // Please note we are not running postcss here
              ]
          },
          {
              // Load all images as base64 encoding if they are smaller than 8192 bytes
              test: /\.(png|jpg|gif)$/,
              use: [
                  {
                      loader: "url-loader",
                      options: {
                          // On development we want to see where the file is coming from, hence we preserve the [path]
                          name: "[path][name].[ext]?hash=[hash:20]",
                          limit: 8192
                      }
                  }
              ]
          },
          {
              // Load all icons
              test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
              use: [
                  {
                      loader: "file-loader"
                  }
              ]
          }
        ]
      }
    },
    preprocessors: {
      //add webpack as preprocessor to support require() in test-suites .js files
      './tests/*.js': ['webpack']
    },
    webpackMiddleware: {
      //turn off webpack bash output when running the tests
      noInfo: true,
      stats: 'errors-only'
    },

    /*karma-mocha-reporter config*/
    mochaReporter: {
      output: 'noFailures'  //full, autowatch, minimal
    }
  });
};
