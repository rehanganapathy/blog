import React from 'react';
import { ArrowRight } from 'lucide-react';

const HomePage = ({ setCurrentPage }) => (
    <div className="pt-20">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center max-w-4xl mx-auto px-6">
                <h1 className="text-6xl md:text-8xl font-extralight text-neutral-800 mb-8 tracking-tight leading-none">
                    Financial
                    <span className="block font-light italic text-neutral-600">
                        Intelligence
                    </span>
                </h1>
                <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                    Clear insights for complex financial landscapes.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button
                        onClick={() => setCurrentPage('streettalk')}
                        className="group px-8 py-4 bg-neutral-800 text-white font-light tracking-wide hover:bg-neutral-700 transition-all duration-300"
                    >
                        Latest Analysis
                        <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                        onClick={() => setCurrentPage('research')}
                        className="px-8 py-4 border border-neutral-300 text-neutral-700 font-light tracking-wide hover:border-neutral-800 hover:text-neutral-800 transition-all duration-300"
                    >
                        View Research
                    </button>
                </div>
            </div>
        </section>

        {/* Content Preview */}
        <section className="py-24 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-16">
                    <div className="text-center group cursor-pointer" onClick={() => setCurrentPage('streettalk')}>
                        <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors">
                            <div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Market Analysis</h3>
                        <p className="text-neutral-500 leading-relaxed font-light">
                            Daily commentary on market movements, policy changes, and emerging trends.
                        </p>
                    </div>

                    <div className="text-center group cursor-pointer" onClick={() => setCurrentPage('research')}>
                        <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors">
                            <div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Deep Research</h3>
                        <p className="text-neutral-500 leading-relaxed font-light">
                            Comprehensive studies on macroeconomic trends and sector-specific analysis.
                        </p>
                    </div>

                    <div className="text-center group cursor-pointer" onClick={() => setCurrentPage('about')}>
                        <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors">
                            <div className="w-2 h-2 bg-neutral-800 rounded-full"></div>
                        </div>
                        <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Expert Insight</h3>
                        <p className="text-neutral-500 leading-relaxed font-light">
                            Decades of combined experience in markets, policy, and financial analysis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;
