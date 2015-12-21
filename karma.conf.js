module.exports = function(config) {
    config.set({

        basePath: '',
        frameworks: ['browserify', 'jasmine'],

        files: [
          'node_modules/babel-polyfill/dist/polyfill.js',
          'src/app/*.js',
          'src/app/**/*.js',
          'src/test/*-spec.js',
          'src/test/**/*-spec.js'
        ],

        exclude: [],

        preprocessors: {
          'src/**/*.js': ['browserify']
        },

        browserify: {
          debug: true,
          transform: [ 'babelify' ]
        },

        // define reporters, port, logLevel, browsers etc.
    });
};
