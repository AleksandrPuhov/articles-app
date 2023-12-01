import { User } from "@entities/User";
import { userActions } from "@entities/User/model/slice/userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import i18n from "@shared/config/i18n/i18n";
import { USER_LOCALSTORAGE_KEY } from "@shared/consts/localstorageConst";
import axios from "axios";

interface LoginByUserNameProps {
  username: string;
  password: string;
  onSuccess: () => void;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>(
  "login/loginByUserName",
  async ({ username, password, onSuccess }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("http://localhost:8000/login", {
        username,
        password,
      });

      if (!response?.data) {
        throw new Error();
      }
      const user = {
        id: response.data.id,
        username: response.data.username,
      };

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(user));
      dispatch(userActions.setAuthData(user));
      onSuccess();

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(i18n.t("loginForm.errorText"));
    }
  }
);
