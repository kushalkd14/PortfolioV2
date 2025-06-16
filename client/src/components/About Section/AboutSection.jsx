import React from 'react'
import Card from '../HTML_Element_Component/Card'
import Section from '../HTML_Element_Component/Section'

const AboutSection = () => {
    return (
        <>
            <Section>
                <Card>
                    <div className='w-full h-full p-4'>
                        <h1 className='text-3xl font-bold text-amber-50 mb-4'>About Me</h1>
                        <p className='text-lg text-gray-300'>
                            I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. My journey in web development has equipped me with a solid foundation in HTML, CSS, and JavaScript, along with experience in various frameworks and libraries.
                        </p>
                        <p className='text-lg text-gray-300 mt-4'>
                            I enjoy solving complex problems and continuously learning new technologies to enhance my skills. My goal is to build user-friendly applications that provide seamless experiences across different devices.
                        </p>
                    </div>
                </Card>
            </Section >
        </>
    )
}

export default AboutSection