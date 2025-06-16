import React from 'react'
import HeroSection from '../Hero Section/HeroSection'
import AboutSection from '../About Section/AboutSection'
import WorkExperienceSection from '../Work Experience/WorkExperienceSection'
import TechStack from '../Tech Stack/TechStack'

const Dashboard = () => {
    return (
        <>
            <div className="main-wrapper h-auto">
                <HeroSection></HeroSection>
                <AboutSection></AboutSection>
                <WorkExperienceSection></WorkExperienceSection>
                <TechStack></TechStack>
            </div>
        </>
    )
}

export default Dashboard
