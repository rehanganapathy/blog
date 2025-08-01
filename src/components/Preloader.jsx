import React, { useState, useEffect } from 'react';

const Preloader = () => {
    const [showFull, setShowFull] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowFull(true);
        }, 800);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-neutral-50 flex items-center justify-center z-50">
            <div className="text-center">
                <div className="text-5xl font-poppins font-extralight tracking-wider text-neutral-800">
                    {showFull ? (
                        <span className="animate-fade-in">1BasisPoint</span>
                    ) : (
                        <span>1BP</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Preloader;