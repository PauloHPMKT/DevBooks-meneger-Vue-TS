const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";
import type { AxiosInstance } from "axios";

export const ApiService: AxiosInstance = axios.create({
	baseURL: API_URL,
	headers: {
		Authorization: `Bearer ${localStorage.getItem("token")}`,
		"Content-Type": "application/json",
	},
});

export const ApiWeather: AxiosInstance = axios.create({
	baseURL: "https://api.openweathermap.org/data/2.5/weather?",
});
