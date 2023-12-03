import { DeepPartial } from "@reduxjs/toolkit";
import { LoginSchema } from "../types/LoginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe("loginSlice", () => {
  test("setUserName", () => {
    const state: DeepPartial<LoginSchema> = {
      username: "test_username",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setUserName("test_new"))
    ).toEqual({
      username: "test_new",
    });
  });

  test("setPassword", () => {
    const state: DeepPartial<LoginSchema> = {
      password: "test_password",
    };

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("test_new"))
    ).toEqual({
      password: "test_new",
    });
  });
});
