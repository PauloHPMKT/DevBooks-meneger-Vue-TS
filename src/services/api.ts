import axios from 'axios'
import type { AxiosInstance } from 'axios'

export const ApiService: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3005/api',
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
})
