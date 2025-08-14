import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://task-app-backend-production-fe04.up.railway.app/',
    // baseURL: 'http://localhost:8080',     
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


apiClient.interceptors.request.use((config) => {
    const token = getCookie('authToken');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
};

export default apiClient;
