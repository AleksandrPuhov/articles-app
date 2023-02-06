export type IBuildMode = "development" | "production";

export interface IBuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
  app: string;
  pages: string;
  shared: string;
  widgets: string;
}

export interface IBuildEnv {
  PORT: number;
}

export interface IBuildOptions {
  mode: IBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
}
