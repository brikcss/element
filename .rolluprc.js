/*! .rolluprc.js | @author Brikcss (https://github.com/brikcss) | @reference (https://rollupjs.org) */

// -------------------------------------------------------------------------------------------------
// Imports and setup.
//

import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import { terser as uglify } from 'rollup-plugin-terser'
import pkg from './package.json'

// Configuration helpers.
const isProd = ['production', 'test'].includes(process.env.NODE_ENV)
const babelConfig = {
  modern: {
    // exclude: ['node_modules/@babel/runtime/**', 'node_modules/core-js/**'],
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['Chrome >= 61', 'Firefox >= 60', 'Safari >= 10.1', 'Edge >= 16']
        }
      }]
    ]
    // runtimeHelpers: true,
    // plugins: ['@babel/plugin-transform-runtime']
  },
  legacy: {
    // exclude: ['node_modules/@babel/runtime/**', 'node_modules/core-js/**'],
    presets: [
      ['@babel/preset-env', {
        targets: {
          browsers: ['IE 11', 'Chrome < 61', 'Firefox < 60', 'Safari < 10.1', 'Edge < 16']
        }
      }]
    ]
    // runtimeHelpers: true,
    // plugins: ['@babel/plugin-transform-runtime']
  }
}
// Set base options.
function config (result = {}) {
  const base = {}
  base.input = 'src/brik-element.js'
  base.external = []
  base.plugins = [isProd && uglify()]
  result.watch = Object.assign({
    chokidar: true,
    include: 'src/**',
    exclude: 'node_modules/**',
    clearScreen: true
  }, result.watch || {})
  result.output = Object.assign({}, {
    compact: isProd,
    sourcemap: !isProd,
    banner: '/*! brik-element.js | @author  Brikcss (https://github.com/brikcss) | @reference  (https://github.com/brikcss/element) */\n'
  }, result.output || {})
  return Object.assign({}, base, result)
}

// -------------------------------------------------------------------------------------------------
// Configs.
//

let configs = [
  // JS module build for custom builds/bundlers or for modern browsers that support JS modules.
  {
    output: {
      file: pkg.main,
      format: 'es'
    }
  },
  // - UMD/browser build for modern browsers (type="module"). No build necessary.
  {
    output: {
      name: 'brikcss',
      exports: 'named',
      file: pkg.umd,
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig.modern),
      isProd && uglify()
    ]
  },
  // - UMD/browser build for legacy browsers (type="module"). No build necessary.
  {
    output: {
      name: 'brikcss',
      exports: 'named',
      file: pkg.umd.replace('.js', '.legacy.js'),
      format: 'umd'
    },
    plugins: [
      resolve(),
      commonjs(),
      babel(babelConfig.legacy),
      isProd && uglify()
    ]
  }
  // // - UMD/browser build for modern browsers (type="module"). No build necessary.
  // {
  //   output: {
  //     name: 'brikcss',
  //     file: 'umd/brik-element-lit.js',
  //     // file: pkg.main,
  //     format: 'umd'
  //   },
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     babel(babelConfig.modern),
  //     isProd && uglify()
  //   ]
  // },
  // // - UMD/browser build for modern browsers (type="module"). No build necessary.
  // {
  //   input: 'src/brik-hyper-element.js',
  //   output: {
  //     name: 'brikcss',
  //     file: 'umd/brik-hyper-element.js',
  //     format: 'umd'
  //   },
  //   plugins: [
  //     resolve(),
  //     commonjs(),
  //     babel(babelConfig.modern),
  //     isProd && uglify()
  //   ]
  // }
]

// -------------------------------------------------------------------------------------------------
// Exports.
//

if (!(configs instanceof Array)) configs = [configs]
export default configs.map(config)
