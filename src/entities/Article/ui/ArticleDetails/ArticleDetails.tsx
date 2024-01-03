import { FC, memo, useEffect } from "react";
import { useAppDispatch } from "@app/providers/StoreProvider";

import {
  DynamicModuleLoader,
  ReducersList,
} from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailReducer } from "../../model/slice/articleDetailSlice";
import { fetchArticleById } from "../../model/services/fetchArticleById";

interface ArticleDetailsProps {
  id: string;
}

const initialReducers: ReducersList = {
  articleDetail: articleDetailReducer,
};

export const ArticleDetails: FC<ArticleDetailsProps> = memo(({ id }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchArticleById(id));
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <p>ArticleDetails</p>
    </DynamicModuleLoader>
  );
});
