import axios from "axios";
import config from "config";

//--> Fetch Users from api
export const getUsers = async () => {
  let response;
  try {
    const { data } = await axios.get(config.API_BASE_URL);
    response = data;
  } catch (error) {
    response = error;
  }
  return response;
};
