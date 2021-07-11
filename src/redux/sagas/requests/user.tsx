import { Axios } from "../../../axios";

export const RequestPostUser = (data: any) => {
  return Axios.post("users", data);
};
