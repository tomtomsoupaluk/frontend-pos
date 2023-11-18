import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const token = localStorage.getItem("token");

class ReportService {
  getDailyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/report/daily-sale`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getMonthlyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/report/monthly-sale`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getWeeklyReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/report/weekly-sale`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  getYesterDayReport(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/report/yesterday-sale`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

export default new ReportService();
