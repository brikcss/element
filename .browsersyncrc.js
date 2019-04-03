/*! .browsersyncrc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://www.browsersync.io/docs/options) */

module.exports = {
  // server: ['examples', 'src'],
  server: {
    baseDir: '.'
    // directory: true
    // index: 'index.html',
    // routes: {
    //   '/examples': '/'
    // }
  },
  // rewriteRules: [{
  //   match: '/src',
  //   replace: ''
  // }],
  startPath: 'examples/esm',
  // proxy: 'samspace.localhost:8080',
  files: ['examples', 'esm', 'umd', 'src'],
  // serveStatic: ['examples', 'src'],
  watchEvents: ['add', 'change', 'unlink'],
  watch: true,
  ignore: [],
  // single: false,
  // watchOptions: undefined,
  injectChanges: true,
  ui: false,
  ghostMode: {
    clicks: false,
    scroll: false,
    forms: {
      submit: false,
      inputs: false,
      toggles: false
    }
  },
  logLevel: 'info',
  logPrefix: 'BS',
  logConnections: false,
  logFileChanges: true,
  logSnippet: true,
  open: true,
  browser: 'default',
  reloadOnRestart: true,
  notify: {
    styles: {
      top: 'auto',
      bottom: 0,
      padding: '5px 15px',
      'border-radius': '6px 0 0 0',
      'background-color': 'rgba(0, 0, 0, .6)'
    }
  },
  scrollProportionally: false,
  scrollThrottle: 100,
  scrollRestoreTechnique: 'window.name',
  scrollElements: [],
  scrollElementMapping: []
}
