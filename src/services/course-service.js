import httpService from "./http-service";

const create = () => httpService("api/courses");
export default create();
