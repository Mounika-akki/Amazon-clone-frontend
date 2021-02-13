import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-clone-backend-1.herokuapp.com/",
});
export default instance;
