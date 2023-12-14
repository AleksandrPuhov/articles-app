import { User } from "@entities/User";
import { userActions } from "@entities/User/model/slice/userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@shared/api/api";
import { USER_LOCALSTORAGE_KEY } from "@shared/consts/localstorageConst";

interface LoginByUserNameProps {
  username: string;
  password: string;
  onSuccess?: () => void;
}

export const loginByUserName = createAsyncThunk<
  User,
  LoginByUserNameProps,
  { rejectValue: string }
>(
  "login/loginByUserName",
  async ({ username, password, onSuccess }, { rejectWithValue, dispatch }) => {
    try {
      const response = await api.post("/login", {
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
      if (onSuccess) onSuccess();

      return response.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue("loginError");
    }
  }
);
