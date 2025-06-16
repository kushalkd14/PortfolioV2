import axiosInstance from "./aixosInstance"


const AuthService = {

    Login: (email, password) => {

        axiosInstance.post('/login', { email, password })
    },
    Register: (name, email, password) => {
        return axiosInstance.post('/register', { name, email, password });
    },

}

export default AuthService;