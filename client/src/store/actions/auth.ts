import { Dispatch } from "react";
import { toast } from "react-toastify";
import { getErrorFromResponse, handleRequest, RequestData } from "@lib/fetch";
import { Authenticate } from "../types";

export const authenticate =
  (data: RequestData) =>
  async (dispatch: Dispatch<Authenticate>): Promise<boolean> => {
    try {
      const res = await handleRequest("/auth/authenticate", "POST", data);

      dispatch({
        type: "AUTHENTICATE",
        user: res.data.user,
        isAuth: true,
      });

      return true;
    } catch (e) {
      toast.error(getErrorFromResponse(e));
      return false;
    }
  };

export const checkAuth = (cookie?: string) => async (dispatch: Dispatch<Authenticate>) => {
  try {
    const res = await handleRequest("/auth/user", "POST", {
      cookie,
    });

    dispatch({
      type: "AUTHENTICATE",
      isAuth: true,
      user: res.data.user,
    });

    return true;
  } catch (e) {
    return false;
  }
};
