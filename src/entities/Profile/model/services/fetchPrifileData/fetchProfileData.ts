import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@shared/api/api";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string }
>("profile/fetchProfileData", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get<Profile>("/profile");

    if (!response?.data) {
      throw new Error();
    }

    return response.data;
  } catch (err) {
    console.log(err);
    return rejectWithValue("profileError");
  }
});
