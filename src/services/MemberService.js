import http from "../http-common";

class MemberService {
  getAll() {
      console.log("Se llama desde MemberService de Vue")
    return http.get("/members");
  }
  get(id) {
    return http.get(`/explorers/${id}`);
  }
  create(data) {
    return http.post("/explorers", data);
  }
  update(id, data) {
    return http.put(`/explorers/${id}`, data);
  }
  delete(id) {
    return http.delete(`/explorers/${id}`);
  }
}

export default new MemberService();