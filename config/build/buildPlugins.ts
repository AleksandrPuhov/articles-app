import webpack, { WebpackPluginInstance } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import { IBuildOptions } from "./types/config";

export const buildPlugins = ({
  paths,
  isDev,
  apiUrl,
  project,
}: IBuildOptions): webpack.WebpackPluginInstance[] => {
  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project),
    }),
  ];

  if (isDev) {
    // plugins.push(new webpack.HotModuleReplacementPlugin());
    plugins.push(new ReactRefreshWebpackPlugin({ overlay: false }));
    plugins.push(new BundleAnalyzerPlugin({ openAnalyzer: false }));
  } else {
    plugins.push(
      new CopyPlugin({
        patterns: [{ from: paths.locales, to: paths.buildLocales }],
      })
    );
  }
  return plugins as WebpackPluginInstance[];
};
