import React from 'react';
import Section from '../HTML_Element_Component/Section';
import './TechStack.css'; // <- import the CSS for animation

const TechStack = () => {
    const firstArr = [
        { url: '/assets/TechIcons/Angular.png', name: 'ANGULAR' },
        { url: '/assets/TechIcons/Ionic.png', name: 'IONIC' },
        { url: '/assets/TechIcons/React.png', name: 'REACT' },
        { url: '/assets/TechIcons/Javascript.png', name: 'JAVASCRIPT' },
        { url: '/assets/TechIcons/MaterialUI.png', name: 'MATERIAL UI' },
        { url: '/assets/TechIcons/Typescript.png', name: 'TYPESCRIPT' },
        { url: '/assets/TechIcons/bootstrap.png', name: 'BOOTSTRAP' },
        { url: '/assets/TechIcons/Sass.png', name: 'SASS' },
        { url: '/assets/TechIcons/tailwind.png', name: 'TAILWIND CSS' },
    ];
    const SecondArr = [
        { url: '/assets/TechIcons/Typescript.png', name: 'TYPESCRIPT' },
        { url: '/assets/TechIcons/SQL.png', name: 'MSSQL' },
        { url: '/assets/TechIcons/MongoDB.png', name: 'MONGO DB' },
        { url: '/assets/TechIcons/ExpressJS.png', name: 'EXPRESS JS' },
        { url: '/assets/TechIcons/Javascript.png', name: 'JAVASCRIPT' },
        { url: '/assets/TechIcons/API.png', name: 'API' },
        { url: '/assets/TechIcons/CSharp.png', name: 'C#' },
        { url: '/assets/TechIcons/dotnet.png', name: '.NET' },
        { url: '/assets/TechIcons/nodeJS.png', name: 'NODE JS' },

    ];


    const repeatedFrontStack = [...firstArr, ...firstArr];
    const repeatedBackStack = [...SecondArr, ...SecondArr];


    return (
        <Section>
            <div className="w-full overflow-hidden">
                <h2 className="text-3xl text-center font-bold text-white mb-6 border-b border-gray-700 pb-2">
                    Work with
                </h2>

                <div className="marquee-track flex flex-col gap-6">
                    <div className="overflow-hidden">
                        <div className="marquee-inner">
                            {repeatedFrontStack.map((item, index) => (
                                <div key={index} className="tech-icon">
                                    <img src={item.url} alt={item.name} className="w-16 h-16 mb-1" />
                                    <span className="text-white text-xs">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <div className="marquee-inner-right">
                            {[...SecondArr, ...SecondArr].map((item, index) => (
                                <div key={index} className="tech-icon">
                                    <img src={item.url} alt={item.name} className="w-16 h-16 mb-1" />
                                    <span className="text-white text-xs">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </Section >
    );
};

export default TechStack;
