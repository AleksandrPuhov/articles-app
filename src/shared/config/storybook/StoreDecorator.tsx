import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { StoryFn } from "@storybook/react";

import { StateSchema, StoreProvider } from "@app/providers/StoreProvider";

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  (StoryComponent: StoryFn) =>
    (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={asyncReducers as ReducersMapObject<StateSchema>}
      >
        <StoryComponent />
      </StoreProvider>
    );
