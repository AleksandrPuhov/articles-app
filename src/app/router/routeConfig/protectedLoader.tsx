import { redirect } from "react-router-dom";

import { USER_LOCALSTORAGE_KEY } from "@shared/consts/localstorageConst";

export const protectedLoader = () => {
  const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);

  if (!user) {
    return redirect("/");
  }
  return { isProtected: true };
};
