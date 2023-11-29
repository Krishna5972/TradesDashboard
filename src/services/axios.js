import axios from "axios";

const instance = axios.create({
  baseURL: "http://20.219.72.225:5000",

  //   baseURL: "http://127.0.0.1:5000",
});

export default instance;
