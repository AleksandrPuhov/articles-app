import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { StateSchema } from "./StateSchema";
import { counterReducer } from "@entities/Counter";
import { userReducer } from "@entities/User";

export function createReduxStore(initialState?: StateSchema) {
  const rootreducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootreducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
