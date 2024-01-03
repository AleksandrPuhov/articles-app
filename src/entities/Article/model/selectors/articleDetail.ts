import { StateSchema } from "@app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";

export const getArticleDetailState = (state: StateSchema) =>
  state?.articleDetail;

export const getArticleDetailData = createSelector(
  getArticleDetailState,
  (articleDetail) => articleDetail?.data
);

export const getArticleDetailError = createSelector(
  getArticleDetailState,
  (articleDetail) => articleDetail?.error
);

export const getArticleDetailIsLoading = createSelector(
  getArticleDetailState,
  (articleDetail) => articleDetail?.isLoading
);
