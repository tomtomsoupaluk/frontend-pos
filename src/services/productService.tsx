import axios, { AxiosResponse } from "axios";

const API_URL = import.meta.env.VITE_API_URL;

class ProductService {
  getProducts(): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/products`);
  }

  getProduct(id: string): Promise<AxiosResponse> {
    return axios.get(`${API_URL}/products/${id}`);
  }

  createProduct(product: any): Promise<AxiosResponse> {
    return axios.post(`${API_URL}/products`, product);
  }

  updateProduct(id: string, product: any): Promise<AxiosResponse> {
    return axios.put(`${API_URL}/products/${id}`, product);
  }

  deleteProduct(id: string): Promise<AxiosResponse> {
    return axios.delete(`${API_URL}/products/${id}`);
  }
}

export default new ProductService();
