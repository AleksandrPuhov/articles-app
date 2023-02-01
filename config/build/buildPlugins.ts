import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import { IBuildPaths } from "./types/config";

export const buildPlugins = ({
  html,
}: IBuildPaths): webpack.WebpackPluginInstance[] => {
  return [
    new HtmlWebpackPlugin({
      template: html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[id].[contenthash:8].css",
    }),
  ];
};
