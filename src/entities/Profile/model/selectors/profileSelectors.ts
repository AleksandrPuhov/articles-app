import { StateSchema } from "@app/providers/StoreProvider";
import { createSelector } from "@reduxjs/toolkit";

export const getProfileState = (state: StateSchema) => state?.profile;

export const getProfileData = createSelector(
  getProfileState,
  (profile) => profile?.data
);

export const getProfileError = createSelector(
  getProfileState,
  (profile) => profile?.error
);

export const getProfileIsLoading = createSelector(
  getProfileState,
  (profile) => profile?.isLoading
);

export const getProfileIsReadOnly = createSelector(
  getProfileState,
  (profile) => profile?.readonly
);
