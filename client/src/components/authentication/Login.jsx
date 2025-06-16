import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import AuthService from '../../services/authservice';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const OnSubmit = async (e) => {
        e.preventDefault();
        try {
            if (email && password) {
                const response = await AuthService.Login(email, password);
                window.alert("Login Successful");
                console.log('Email:', email);
                console.log('Password:', password);

                navigate('/dashboard');
            }
            else {
                window.alert("Please fill all the fields");
                return;
            }

        } catch (error) {
            console.error('Login failed:', error);
            window.alert("Login Failed");
        }

    };
    return (
        <>
            <div className="main-class bg-black h-screen flex items-center justify-center">
                <div className="flex items-center justify-center">
                    <div className="bg-white p-8 rounded-lg shadow-md w-96">
                        <h2 className="text-2xl font-bold mb-6 text-center text-black">Login</h2>
                        <form onSubmit={OnSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm text-start font-medium mb-2 text-black" htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-start text-sm font-medium mb-2 text-black" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    className="w-full text-black px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
