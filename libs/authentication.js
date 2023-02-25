import Cookies from "js-cookie";
import { getUserApi } from "./apis";

const getUser = async (id) => {
  const user  = await getUserApi(id)
  return user;
}
export const isAuthenticated = async (id) => {
  const user = await getUser(id);
  return user.status !== 200 ? false : true;
}

export const setCookies = (token) => {
  Cookies.set('_token', token);
  return true;
}

