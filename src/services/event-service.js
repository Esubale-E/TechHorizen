import httpService from "./http-service";

const create = (event) => httpService(event);

export default create("api/events");
