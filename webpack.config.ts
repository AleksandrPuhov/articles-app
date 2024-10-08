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
    features: path.resolve(__dirname, "src", "features"),
    locales: path.resolve(__dirname, "public", "locales"),
    buildLocales: path.resolve(__dirname, "build", "locales"),
  };

  const mode = env.mode || "development";
  const PORT = env.PORT || 3000;
  const apiUrl = env.apiUrl || "http://localhost:8000";

  const isDev = mode === "development";

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
    project: "frontend",
  });

  return config;
};
