import {
  getProfileData,
  getProfileIsReadOnly,
} from "./model/selectors/profileSelectors";
import { fetchProfileData } from "./model/services/fetchPrifileData/fetchProfileData";
import { profileActions, profileReducer } from "./model/slice/profileSlice";
import { Profile, ProfileSchema } from "./model/types/profile";
import { ProfileCard } from "./ui/ProfileCard/ProfileCard";

export {
  ProfileSchema,
  Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileIsReadOnly,
  getProfileData,
};
