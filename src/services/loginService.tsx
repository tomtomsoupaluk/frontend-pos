import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class LoginService {
  login(username: string, password: string): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/login`, { username, password });
  }

  logout(): void {}

  register(
    username: string,
    email: string,
    password: string
  ): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/register`, {
      username,
      email,
      password,
    });
  }
}

export default new LoginService();
