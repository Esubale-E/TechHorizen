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
    return apiClient.put(`${this.endpoint}/${id}`, entity); // Fixed URL construction
  }

  updateWithFile(id, formData) {
    // Additional method for handling file uploads
    return apiClient.put(`${this.endpoint}/${id}/lesson`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }
}

const createHttpService = (endpoint) => new HttpService(endpoint);
export default createHttpService;
