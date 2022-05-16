import http from "../http-common";

class OrganizerService {
  getAll() {
      console.log("Se llama desde OrganizerService de Vue")
    return http.get("/organizers");
  }
  get(id) {
    return http.get(`/organizers/${id}`);
  }
  create(data) {
    return http.post("/organizers", data);
  }
  update(id, data) {
    return http.put(`/organizers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/organizers/${id}`);
  }
}

export default new OrganizerService();