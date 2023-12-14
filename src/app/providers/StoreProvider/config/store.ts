import {
  AnyAction,
  DeepPartial,
  ReducersMapObject,
  configureStore,
} from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { userReducer } from "@entities/User";
import { useDispatch } from "react-redux";
import { createReducerManager } from "./reducerManager";
import { ReducersList } from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export function createReduxStore(
  initialState?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) {
  const rootreducer: ReducersMapObject<StateSchema, AnyAction> = {
    ...asyncReducers,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootreducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
