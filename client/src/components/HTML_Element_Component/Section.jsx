import React, { useEffect, useState, useRef } from 'react';

const Section = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 } // Trigger when 10% is visible
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: 'opacity 0.6s ease, transform 0.6s ease',
                padding: '0 0.9rem',
                margin: '20px 0',
                filter: isVisible ? 'blur(0)' : 'blur(4px)', // optional: blur out
            }}
        >
            {children}
        </div>
    );
};

export default Section;
