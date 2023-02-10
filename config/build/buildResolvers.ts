import webpack from 'webpack';

import { IBuildPaths } from './types/config';

export const buildResolvers = ({
  src,
  app,
  pages,
  shared,
  widgets,
}: IBuildPaths): webpack.ResolveOptions => ({
  extensions: ['.tsx', '.ts', '.js'],
  preferAbsolute: true,
  modules: [src, 'node_modules'],
  alias: {
    '@app': app,
    '@pages': pages,
    '@shared': shared,
    '@widgets': widgets,
  },
});
