import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class UserService {
  getUsers(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/users`);
  }

  getUser(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/users/${id}`);
  }

  createUser(product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/users`, product);
  }

  updateUser(id: string, product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/users/${id}`, product);
  }

  deleteUser(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/users/${id}`);
  }
}

export default new UserService();
