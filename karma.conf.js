module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/**/*.ts',
      'tests/**/*.spec.ts'
    ],
    exclude: [
    ],
    preprocessors: {
      'src/**/*.ts': [ 'karma-typescript' ],
      'tests/**/*.spec.ts': [ 'karma-typescript' ]
    },
    reporters: ['spec', 'karma-typescript'],
    karmaTypescriptConfig: {
      compilerOptions: {
        strictNullChecks: false,
        noImplicitAny: true
      },
      reports: {
        "html": "__coverage__",
        "text-summary": ""
      }
    },
    browserConsoleLogOptions: {
      terminal: true,
      level: "debug"
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
