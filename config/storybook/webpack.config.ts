import path from 'path';
import webpack from 'webpack';

import { IBuildPaths } from 'config/build/types/config';
import { buildscssLoader } from '../build/loaders/buildscssLoader';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: IBuildPaths = {
    entry: '',
    build: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    app: path.resolve(__dirname, '..', '..', 'src', 'app'),
    pages: path.resolve(__dirname, '..', '..', 'src', 'pages'),
    shared: path.resolve(__dirname, '..', '..', 'src', 'shared'),
    widgets: path.resolve(__dirname, '..', '..', 'src', 'widgets'),
  };

  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.tsx', '.ts', '.js');

  // eslint-disable-next-line no-param-reassign
  config.resolve.alias = {
    '@app': paths.app,
    '@pages': paths.pages,
    '@shared': paths.shared,
    '@widgets': paths.widgets,
  };

  config.module.rules.push(buildscssLoader(true));

  return config;
};
