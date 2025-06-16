import { useState } from 'react'
import './App.css'
import Login from './components/authentication/Login'
import Dashboard from './components/dashboard/Dashboard'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Animated_background from './components/Web_backgroud/animated_background'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='w-full h-full'>
                <Animated_background>
                <Navbar />
                    <Routes>
                        {/* <Route path='' element={<Login />}></Route> */}
                        <Route path='/' element={<Dashboard />}></Route>
                    </Routes>
                </Animated_background>
            </div>
        </>
    )
}

export default App
