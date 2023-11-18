import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const token = localStorage.getItem("token");

class UserService {
  getUsers(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getUser(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  createUser(product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/users`, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  updateUser(id: string, product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/users/${id}`, product, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  deleteUser(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/users/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new UserService();
