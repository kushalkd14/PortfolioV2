import React from 'react'
import './animated_background.css'
const Animated_background = ({ children }) => {
    return (
        <>
            <div className="bg-container overflow-hidden bg-gray-950 h-full">
                <div className='big-circle'></div>
                <div className='small-circle-1'></div>
                <div className='small-circle-2'></div>
                {children}
            </div>
        </>
    )
}

export default Animated_background
