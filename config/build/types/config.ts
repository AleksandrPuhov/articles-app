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
  entities: string;
  features: string;
}

export interface IBuildEnv {
  PORT: number;
  mode: IBuildMode;
  apiUrl: string;
}

export interface IBuildOptions {
  mode: IBuildMode;
  paths: IBuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
  project: "storybook" | "frontend" | "jest";
}
