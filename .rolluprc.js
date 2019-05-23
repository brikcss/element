/*! .rolluprc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://rollupjs.org) */

import configGen from '@brikcss/rollup-config-generator'
export default configGen.create(
  [
    {
      type: 'browser',
      id: 'element',
      input: 'src/brik-element.js',
      output: {
        banner: configGen.createBanner()
      }
    }
  ],
  {
    umd: {
      exports: 'named',
      name: 'brikcss'
    }
  }
)
