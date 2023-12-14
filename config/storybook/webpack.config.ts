import path from "path";
import { Configuration, DefinePlugin, RuleSetRule } from "webpack";

import { IBuildPaths } from "config/build/types/config";
import { buildSvgLoader } from "../build/loaders/buildSvgLoader";
import { buildScssLoader } from "../build/loaders/buildScssLoader";

export const webpackConf = ({ config }: { config: Configuration }) => {
  const paths: IBuildPaths = {
    entry: "",
    build: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
    app: path.resolve(__dirname, "..", "..", "src", "app"),
    pages: path.resolve(__dirname, "..", "..", "src", "pages"),
    shared: path.resolve(__dirname, "..", "..", "src", "shared"),
    widgets: path.resolve(__dirname, "..", "..", "src", "widgets"),
    entities: path.resolve(__dirname, "..", "..", "src", "entities"),
    features: path.resolve(__dirname, "..", "..", "src", "features"),
  };

  if (config?.resolve?.modules) {
    config.resolve.modules = [
      path.resolve(__dirname, "../../src"),
      "node_modules",
    ];
    config.resolve.modules.push(paths.src);
  }

  config?.resolve?.extensions &&
    config.resolve.extensions.push(".tsx", ".ts", ".js");

  if (config?.resolve?.alias) {
    config.resolve.alias = {
      "@app": paths.app,
      "@pages": paths.pages,
      "@shared": paths.shared,
      "@widgets": paths.widgets,
      "@entities": paths.entities,
      "@features": paths.features,
    };
  }

  if (config?.module?.rules) {
    config.module.rules.push(buildScssLoader(true));

    const rules = config.module.rules as RuleSetRule[];
    config.module!.rules = rules.map((rule) =>
      /svg/.test(rule.test as string) ? { ...rule, exclude: /\.svg$/i } : rule
    );

    config.module.rules.push(buildSvgLoader());
  }

  config?.plugins &&
    config.plugins.push(
      new DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify(""),
        __PROJECT__: JSON.stringify("storybook"),
      })
    );

  return config;
};
