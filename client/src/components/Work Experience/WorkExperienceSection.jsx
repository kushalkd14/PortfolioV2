import React from 'react'
import Section from '../HTML_Element_Component/Section'

const WorkExperienceSection = () => {
    return (
        <>
            <Section>
                <div className="mt-40"></div>
                <h2 className="text-3xl text-center font-bold text-white mb-6 border-b border-gray-700 pb-2">
                    Experience
                </h2>
                <div className="kd-experience-dv w-full h-auto d-flex justify-between items-center">
                    <div className="w-1/2 kd-img-div">
                        <img src="/assets/Experience.png" width={'70%'} alt="" className='kd-illustrative-image' />
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 transition-shadow duration-300">
                            <div className="flex justify-between items-center">
                                <h3 className="text-xl font-semibold text-white">
                                    Senior Software Developer
                                </h3>
                                <span className="text-sm text-gray-400 font-bold">1.6+ Years</span>
                            </div>
                            <p className="text-gray-300 text-sm mt-1">
                                Parsystent Prime LLP &mdash; Startup Environment
                            </p>
                            <ul className="list-disc list-inside text-gray-400 text-sm mt-3 space-y-1">
                                <li>Led development of scalable web applications with modern stacks.</li>
                                <li>Handled full-stack responsibilities, from frontend (Angular, SCSS) to backend (C#, .Net Web APIs, MSSQL).</li>
                                <li>Integrated third-party APIs and optimized performance in production systems.</li>
                                <li>Collaborated in a fast-paced agile team and mentored junior developers.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default WorkExperienceSection