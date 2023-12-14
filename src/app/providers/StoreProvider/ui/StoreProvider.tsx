import { FC } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "../config/store";
import { StateSchema } from "../config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";
import { ReducersList } from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

interface Props {
  children: React.ReactNode;
  initialState?: DeepPartial<StateSchema>;
  // asyncReducers?: ReducersMapObject<StateSchema, AnyAction>;
  asyncReducers?: ReducersList;
}

const StoreProvider: FC<Props> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
