import apiClient from "./api-client.js";

class httpService {
  endpont;

  constructor(endpoint) {
    this.endpont = endpoint;
  }
  getAll() {
    return apiClient.get(this.endpont);
  }

  getOne(id) {
    return apiClient.get(this.endpont + "/:" + id);
  }

  delete(id) {
    return apiClient.delete(this.endpont + "/:" + id);
  }

  create(entity) {
    return apiClient.post(this.endpont, entity);
  }

  update(id) {
    return apiClient.put(this.endpont + "/:" + id);
  }
}

const create = (endpoint) => new httpService(endpoint);
export default create;
