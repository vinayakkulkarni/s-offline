import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.js',
  output: [
    {
      format: 'cjs',
      name: 'SOffline',
      file: 'dist/s-offline.cjs.js',
    },
    {
      format: 'umd',
      name: 'SOffline',
      file: 'dist/s-offline.js',
    },
    {
      format: 'es',
      file: 'dist/s-offline.esm.js',
    },
  ],
  plugins: [
    svelte({
      // we'll extract any component CSS out into
      // a separate file - better for performance
      css: (css) => {
        css.write('dist/s-offline.css');
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration -
    // consult the documentation for details:
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    resolve({
      browser: true,
      dedupe: ['svelte'],
    }),
    commonjs(),
  ],
};
