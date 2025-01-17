import axios, { CanceledError } from "axios";
const baseUrl = "http://169.254.136.208:5000/";
// const baseUrl = "http://localhost:5000/";

export default axios.create({
  baseURL: baseUrl,
});

export { CanceledError, baseUrl };
