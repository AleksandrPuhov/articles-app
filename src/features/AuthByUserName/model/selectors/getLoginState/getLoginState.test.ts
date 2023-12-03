import { StateSchema } from "@app/providers/StoreProvider";
import { DeepPartial } from "@reduxjs/toolkit";
import { getLoginState } from "./getLoginState";

describe("getCounter", () => {
  test("should return test values", () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: "test1",
        password: "test2",
        isLoading: true,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: "test1",
      password: "test2",
      isLoading: true,
    });
  });

  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
