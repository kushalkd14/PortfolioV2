import React from 'react'

const Card = ({ children }) => {
    return (
        <div className="w-full h-auto p-4 rounded-2xl 
        bg-gradient-to-br from-[#b7b8ba] via-[#51555d] to-[#0d1224]
        shadow-[0_10px_30px_rgba(100,150,255,0.1)]
        transform transition-all duration-300 ease-out 
        hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(100,150,255,0.2)] hover:rotate-[0.5deg]">
            {children}
        </div>

    )
}

export default Card
