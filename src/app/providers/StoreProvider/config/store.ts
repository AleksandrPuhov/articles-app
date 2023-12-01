import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@entities/Counter";
import { userReducer } from "@entities/User";
import { loginReducer } from "@features/AuthByUserName";
import { useDispatch } from "react-redux";

export function createReduxStore(initialState?: StateSchema) {
  const rootreducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    login: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootreducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
