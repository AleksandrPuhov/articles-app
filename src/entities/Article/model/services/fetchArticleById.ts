import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@shared/api/api";
import { Article } from "../types/article";

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  { rejectValue: string }
>("articleDetail/fetchArticleById", async (articleId, { rejectWithValue }) => {
  try {
    const response = await api.get<Article>(`/articles/${articleId}`);

    if (!response?.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue("articleError");
  }
});
