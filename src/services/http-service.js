import apiClient from "./api-client.js";

class HttpService {
  constructor(endpoint) {
    this.endpoint = endpoint; // Fixed the typo
  }

  getAll() {
    return apiClient.get(this.endpoint);
  }

  getOne(id) {
    return apiClient.get(`${this.endpoint}/${id}`); // Fixed URL construction
  }

  delete(id) {
    return apiClient.delete(`${this.endpoint}/${id}`); // Fixed URL construction
  }

  create(entity) {
    return apiClient.post(this.endpoint, entity);
  }

  update(id, entity) {
    return apiClient.put(`${this.endpoint}/${id}`, entity);
  }

  enroll(id, entity) {
    return apiClient.put(`${this.endpoint}/${id}/enroll`, entity);
  }

  createWithFile(formData) {
    return apiClient.post(`${this.endpoint}/file`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
  updateWithFile(id, formData) {
    return apiClient.put(`${this.endpoint}/${id}/lesson`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }

  login(userData) {
    return apiClient.post(`${this.endpoint}/login`, userData);
  }

  logout() {
    return apiClient.post(`${this.endpoint}/logout`);
  }
}

const createHttpService = (endpoint) => new HttpService(endpoint);
export default createHttpService;
