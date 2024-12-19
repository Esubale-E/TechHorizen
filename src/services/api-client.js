import axios, { CanceledError } from "axios";

const baseUrl = "http://localhost:5000/";
export default axios.create({
  baseURL: baseUrl,
});

export { CanceledError, baseUrl };
