import { createSlice } from "@reduxjs/toolkit";
import { ProfileSchema } from "../types/profile";

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<User>) => {
    //   state.authData = action.payload;
    // },
    // initAuthData: (state) => {
    //   const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
    //   if (user) {
    //     state.authData = JSON.parse(user);
    //   }
    // },
    // logout: (state) => {
    //   localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    //   state.authData = undefined;
    // },
  },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
