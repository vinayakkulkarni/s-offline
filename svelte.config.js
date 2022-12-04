import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),
    files: {
      lib: 'src/lib',
      routes: 'src/routes',
      appTemplate: 'src/_app.html',
    },
  },
  package: {
    dir: 'dist',
    emitTypes: true,
  },
};

export default config;
