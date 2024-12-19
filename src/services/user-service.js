import httpService from "./http-service";

const create = () => httpService("api/users");
export default create();
