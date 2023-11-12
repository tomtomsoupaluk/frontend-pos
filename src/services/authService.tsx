import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class LoginService {
  login(data: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/login`, data);
  }

  logout(): void {}

  validateToken(): Promise<AxiosResponse> {
    return axios.post(
      `${API_URL}/validate`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
  }
}

export default new LoginService();
