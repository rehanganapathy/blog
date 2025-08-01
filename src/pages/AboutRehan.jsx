import React from 'react';

const AboutPage = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-extralight text-neutral-800 mb-20 text-center tracking-tight">
                Krish Lohia
            </h1>

            <div className="space-y-24">
                {[
                    {
                        name: "Rehan Ganapathy",
                        role: "Economic Analyst",
                        bio: "PhD Economics, MIT. Former Federal Reserve researcher specializing in monetary policy and macroeconomic forecasting. Published extensively on central banking.",
                        focus: "Monetary policy, inflation dynamics, fixed income"
                    }
                ].map((person, index) => (
                    <div key={index} className="grid md:grid-cols-2 gap-12 items-start">
                        <div className={index === 1 ? 'md:order-2' : ''}>
                            <h2 className="text-2xl font-light text-neutral-800 mb-2 tracking-wide">{person.name}</h2>
                            <p className="text-neutral-500 mb-6 tracking-wide font-light">{person.role}</p>
                            <p className="text-neutral-600 leading-relaxed mb-4 font-light">{person.bio}</p>
                            <p className="text-sm text-neutral-500 font-light italic">{person.focus}</p>
                        </div>
                        <div className={`${index === 1 ? 'md:order-1' : ''} flex justify-center`}>
                            <div className="w-48 h-48 bg-neutral-100 border border-neutral-200 flex items-center justify-center">
                                <div className="text-4xl font-extralight text-neutral-400 tracking-wider">
                                    {person.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default AboutPage;
