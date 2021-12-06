import axios from 'axios'

export default {
  async getAllFundraiser() {
    let res = await axios.get("http://localhost:8080/fundraiser");
    return res.data;
  },
  async getOneFundraiser(id) {
    let res = await axios.get(`http://localhost:8080/fundraiser/${id}`);
    return res.data;
  },

  async createFundraiser(data) {
    let res = await axios.post("http://localhost:8080/fundraiser/", data);
    return res.data;
  },

  async UpdateFundraiser(id, data) {
    let res = await axios.put(`http://localhost:8080/fundraiser/${id}`, data);
    return res.data;
  },

  async deleteFundraiser(id) {
    let res = await axios.delete(`http://localhost:8080/fundraiser/${id}`);
    return res.data;
  },

  async deleteAllFundraiser(){
    let res = await axios.delete("http://localhost:8080/fundraiser");
    return res.data;
  }
}