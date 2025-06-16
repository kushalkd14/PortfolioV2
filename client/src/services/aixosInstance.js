import axios from 'axios';

const axiosInstance = axios.create({
    //   baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token') || ''}`
    }
});

axiosInstance.interceptors.request.use(
    (config) => {

    }
)

export default axiosInstance;   