export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export interface ArticleBaseBlock {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBaseBlock {
  type: ArticleBlockType.TEXT;
  title?: string;
  paragraphs: string[];
}
export interface ArticleCodeBlock extends ArticleBaseBlock {
  type: ArticleBlockType.CODE;
  code: string;
}
export interface ArticleImageBlock extends ArticleBaseBlock {
  type: ArticleBlockType.IMAGE;
  title: string;
  src: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleCodeBlock
  | ArticleImageBlock;
