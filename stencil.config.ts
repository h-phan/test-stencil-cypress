import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'stencil-component-demo',
  outputTargets: [
    {
      type: 'dist',
      copy: [
        { src: 'components/rs-linear-progress/rs-mixins.scss' }
      ],
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        { src: 'test/*' },
        { src: 'components/rs-linear-progress/_rs-mixins.scss' }
      ],
    }
  ],
  plugins: [
    sass({
      includePaths: ["node_modules"]
    }),
    postcss({
      plugins: [autoprefixer()]
    })
  ]
};
