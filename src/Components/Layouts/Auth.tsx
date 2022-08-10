import axios from "axios";
import { API_BASE_URL } from "../../constant";

export const listData = () => {
  try {
    return axios.get(`${API_BASE_URL}products`).then((response) => {
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};

export const userData = () => {
  try {
    return axios.get(`${API_BASE_URL}users`).then((response) => {
      console.log("user=====>", response.data);
      return response;
    });
  } catch (error) {
    console.log(error);
  }
};
