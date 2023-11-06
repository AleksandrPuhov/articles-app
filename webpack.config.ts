import path from "path";

import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { IBuildEnv, IBuildPaths } from "./config/build/types/config";

export default (env: IBuildEnv) => {
  const paths: IBuildPaths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src"),
    app: path.resolve(__dirname, "src", "app"),
    pages: path.resolve(__dirname, "src", "pages"),
    shared: path.resolve(__dirname, "src", "shared"),
    widgets: path.resolve(__dirname, "src", "widgets"),
    entities: path.resolve(__dirname, "src", "entities"),
  };

  const mode = env.mode || "development";
  const PORT = env.PORT || 3000;

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};
