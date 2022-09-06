import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import pkg from './package.json';

const banner = `/*!
* ${pkg.name} v${pkg.version}
* (c) ${new Date().getFullYear()} ${pkg.author.name}
* @license ${pkg.license}
*/`;

export default defineConfig({
  plugins: [svelte()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SOffline',
      formats: ['es', 'cjs', 'umd', 'iife'],
      fileName: 's-offline',
    },
    commonjsOptions: {
      extensions: ['.js', '.ts', '.svelte'],
      exclude: 'src/**',
      include: 'node_modules/**',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['svelte', 'ping.js'],
      output: {
        exports: 'named',
        banner,
        strict: true,
        sourcemap: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          svelte: 'svelte',
          'ping.js': 'Ping',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 's-offline.css';
          return assetInfo.name;
        },
      },
    },
  },
});
