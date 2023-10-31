import webpack from 'webpack';

import { IBuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildScssLoader } from './loaders/buildScssLoader';

export const buildLoaders = ({
  isDev,
}: IBuildOptions): webpack.RuleSetRule[] => {
  // const babelLoader = {
  //   test: /\.(js|jsx|tsx)$/,
  //   exclude: /node_modules/,
  //   use: {
  //     loader: 'babel-loader',
  //     options: {
  //       presets: ['@babel/preset-env'],
  //       // plugins: [
  //       //   [
  //       //     'i18next-extract',
  //       //     {
  //       //       locales: ['ru', 'en'],
  //       //       keyAsDefaultValue: true,
  //       //     },
  //       //   ],
  //       // ],
  //     },
  //   },
  // };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const svgLoader = buildSvgLoader();

  const scssLoader = buildScssLoader(isDev);

  // return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
  return [fileLoader, svgLoader, typescriptLoader, scssLoader];

};
