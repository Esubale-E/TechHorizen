import httpService from "./http-service";

const create = (endpoint) => httpService(endpoint);

export default create("api/blogs");
