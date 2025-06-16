import React from 'react'
import Section from '../HTML_Element_Component/Section'
import './HeroSection.css'

const HeroSection = () => {
    return (
        <>
            <Section>
                <div className='w-full h-screen'>
                    <div className="d-flex justify-between">
                        <div className="w-1/2 h-full d-flex items-center justify-start flex-col">
                            <span className='text-[6rem] font-bold text-white text-start flex space-x-2'>
                                {'KUSHAL'.split('').map((char, index) => (
                                    <span key={index} style={{
                                        animation: `fadeInUp 0.5s ease forwards`,
                                        animationDelay: `${index * 0.1}s`,
                                        opacity: 0,
                                    }}>{char}</span>
                                ))}
                            </span>

                            <span className='text-[1.3rem] font-bold text-blue-50 opacity-90 flex space-x-1'>
                                {'WEB DEVELOPER | SOFTWARE DEVELOPER'.split('').map((char, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            animation: `fadeInUp 0.5s ease forwards`,
                                            animationDelay: `${index * 0.02}s`,
                                            opacity: 0,
                                            textShadow: '0 0 8px rgba(173, 216, 230, 0.3), 0 0 15px rgba(173, 216, 230, 0.2)',
                                        }}
                                    >
                                        {char}
                                    </span>
                                ))}
                            </span>


                        </div>
                        <div className="w-1/2 h-full flex items-center justify-center">
                            <img src="/assets/hero_svg.svg" width={'70%'} alt="hero image" className='kd-illustrative-image' />
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default HeroSection