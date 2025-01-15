import axios, { CanceledError } from "axios";
const baseUrl = "http://192.168.159.93:5000/";
// const baseUrl = "http://localhost:5000/";

export default axios.create({
  baseURL: baseUrl,
});

export { CanceledError, baseUrl };
