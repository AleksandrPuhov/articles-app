import { DeepPartial } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";

import { StateSchema, StoreProvider } from "@app/providers/StoreProvider";
import { ReducersList } from "@shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider initialState={state} asyncReducers={asyncReducers}>
        <StoryComponent />
      </StoreProvider>
    );
