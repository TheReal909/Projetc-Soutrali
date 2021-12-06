import axios from 'axios'

export default {
  async getAllusers() {
    let res = await axios.get("http://localhost:8080/users");
    return res.data;
  },
  async getOneUser(id) {
    let res = await axios.get(`http://localhost:8080/users/${id}`);
    return res.data;
  },

  async createUser(data) {
    let res = await axios.post("http://localhost:8080/users/", data);
    return res.data;
  },

  async UpdateUser(id, data) {
    let res = await axios.put(`http://localhost:8080/users/${id}`, data);
    return res.data;
  },

  async deleteUser(id) {
    let res = await axios.delete(`http://localhost:8080/users/${id}`);
    return res.data;
  },

  async deleteAllUser(){
    let res = await axios.delete("http://localhost:8080/users");
    return res.data;
  }
}