import axios from "axios";

const instance = axios.create("");

instance.interceptors.request.use(
  async (config) => {},
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
