import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:2121",
});

export const register = (userCredentials) => API.post("/api/auth/register", userCredentials);

export const login = (userCredentials) => API.post("/api/auth/login", userCredentials);
