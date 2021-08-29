import alias from '@rollup/plugin-alias';
import babel from '@rollup/plugin-babel';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import sucrase from '@rollup/plugin-sucrase';
import scss from 'rollup-plugin-scss';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import pkg from '../package.json';

const plugins = [
  alias(),
  resolve({
    extensions: ['.js', '.ts', '.svelte'],
    browser: true,
  }),
  babel({
    babelHelpers: 'bundled',
    exclude: 'node_modules/**',
  }),
  commonjs({
    extensions: ['.js', '.ts', '.svelte'],
    exclude: 'src/**',
  }),
  svelte({ emitCss: true }),
  scss({
    output: 'dist/s-offline.min.css',
    // @ts-ignore
    outputStyle: 'compressed',
  }),
  sucrase({
    exclude: ['node_modules/**'],
    transforms: ['typescript'],
  }),
  beep(),
  terser({
    compress: {
      drop_console: true,
      drop_debugger: true,
    },
  }),
];

const banner = `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} ${pkg.author.name}
  * @license ${pkg.license}
  */`;

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.jsdelivr,
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
