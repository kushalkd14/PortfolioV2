import React from 'react'
import Card from '../HTML_Element_Component/Card'
import Section from '../HTML_Element_Component/Section'

const AboutSection = () => {
    return (
        <>
            <Section>

                <div className='w-full h-full p-4'>
                    <h2 className="text-3xl text-center font-bold text-white mb-6 border-b border-gray-700 pb-2">
                        About
                    </h2>
                    <p className='text-lg text-gray-300'>
                        I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with a solid foundation in HTML, CSS, and JavaScript, along with experience in various frameworks and libraries.
                    </p>
                    <p className='text-lg text-gray-300 mt-4'>
                        I enjoy solving complex problems and continuously learning new technologies to enhance my skills. My goal is to build user-friendly applications that provide seamless experiences across different devices.
                    </p>
                </div>
            </Section >
        </>
    )
}

export default AboutSection