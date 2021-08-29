import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import svelte from 'rollup-plugin-svelte';
import autoPreprocess from 'svelte-preprocess';
import pkg from '../package.json';

export const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license ${pkg.license}
*/`;

const plugins = [
  alias(),
  resolve({
    browser: true,
    dedupe: ['svelte'],
    extensions: ['.js', '.ts', '.svelte'],
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions: ['.js', '.ts', '.svelte'],
    exclude: 'src/**',
  }),
  svelte({
    emitCss: true,
    preprocess: autoPreprocess(),
  }),
  scss({
    output: 'dist/s-offline.css',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
];

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'SOffline',
      exports: 'named',
      strict: true,
      sourcemap: true,
      banner,
    },
    {
      file: pkg.module,
      format: 'es',
      name: 'SOffline',
      exports: 'named',
      sourcemap: true,
      banner,
    },
    {
      file: pkg.cdn,
      format: 'umd',
      name: 'SOffline',
      exports: 'named',
      banner,
      sourcemap: true,
      globals: {
        svelte: 'svelte',
        'ping.js': 'Ping',
      },
    },
  ],
  plugins,
  external: ['svelte', 'ping.js'],
};
