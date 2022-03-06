import { API } from "../configs/constant";
import { fetchAsPost } from "./api";

export async function fetchLogin(body) {
  const res = await fetchAsPost(API.USER.LOGIN, body);
  if (res.isOk) {
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", JSON.stringify(res.data.user));
  }

  return res;
}