import axios from "axios";
import { getBackendUrl } from "../config";

const api = () => {
	var token = JSON.parse(localStorage.getItem("token"));
	const instance = axios.create({
		baseURL:getBackendUrl(),
		withCredentials: false,
	});
	// Request interceptor for API calls
	instance.interceptors.request.use(
		async config => {
			config.headers = {
				'Authorization': `Bearer ${token}`,
				'Accept': 'application/json',
				'Content-Type': 'application/x-www-form-urlencoded'
			}

			return config;
		},
		error => {
			Promise.reject(error)
		});
	// Response interceptor for API calls
	instance.interceptors.response.use((response) => {
		return response;
	}, async function (error) {
		if (error.response?.status === 401) {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			window.location.href="/login"
		}
		return Promise.reject(error);
	});


	return instance;
}


export default api;