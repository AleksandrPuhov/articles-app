import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

import { IBuildPaths } from 'config/build/types/config';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';
import { buildScssLoader } from '../build/loaders/buildScssLoader';

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

  config.module.rules.push(buildScssLoader(true));

  // eslint-disable-next-line no-param-reassign
  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });
  config.module.rules.push(buildSvgLoader());

  return config;
};
