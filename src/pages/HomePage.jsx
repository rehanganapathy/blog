import React from 'react';
import { ArrowRight, TrendingUp, BookOpen, UserCheck } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import StockTicker from '../components/StockTicker';

// Hook for fade-in animations
const useFadeIn = () => {
    React.useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);
};

const HomePage = () => {
    useFadeIn();
    const navigate = useNavigate();

    return (
        <div className="pt-20">
            {/* Stock Ticker */}
            <StockTicker />

            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-neutral-100">
                <div className="text-center max-w-4xl mx-auto px-6">
                    <TypeAnimation
                        sequence={[
                            1000,
                            '1BasisPoint',
                            2500,
                            'Clear Insights',
                            2500,
                        ]}
                        wrapper="h1"
                        speed={40}
                        cursor={true}
                        repeat={Infinity}
                        className="text-6xl md:text-8xl font-poppins font-extralight text-neutral-800 mb-8 tracking-tight leading-none"
                    />
                    <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                        Clear insights for complex financial landscapes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => navigate('/streettalk')}
                            className="group px-8 py-4 bg-neutral-800 text-white font-light tracking-wide hover:bg-neutral-700 transition-all duration-300"
                        >
                            Latest Analysis
                            <ArrowRight className="inline-block ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate('/research')}
                            className="px-8 py-4 border border-neutral-300 text-neutral-700 font-light tracking-wide hover:border-neutral-800 hover:text-neutral-800 transition-all duration-300"
                        >
                            View Research
                        </button>
                    </div>
                </div>
            </section>

            {/* Feature Cards */}
            <section className="py-24 bg-neutral-50">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-16">
                        {/* Market Analysis Card */}
                        <div
                            className="text-center group cursor-pointer fade-in"
                            onClick={() => navigate('/streettalk')}
                        >
                            <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors duration-300">
                                <TrendingUp className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Market Analysis</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">
                                Daily commentary on market movements, policy changes, and emerging trends.
                            </p>
                        </div>

                        {/* Deep Research Card */}
                        <div
                            className="text-center group cursor-pointer fade-in"
                            style={{ transitionDelay: '150ms' }}
                            onClick={() => navigate('/research')}
                        >
                            <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors duration-300">
                                <BookOpen className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Deep Research</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">
                                Comprehensive studies on macroeconomic trends and sector-specific analysis.
                            </p>
                        </div>

                        {/* Expert Insight Card */}
                        <div
                            className="text-center group cursor-pointer fade-in"
                            style={{ transitionDelay: '300ms' }}
                            onClick={() => navigate('/about-rehan')}
                        >
                            <div className="w-16 h-16 border border-neutral-300 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-neutral-800 transition-colors duration-300">
                                <UserCheck className="w-7 h-7 text-neutral-700" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-lg font-light text-neutral-800 mb-4 tracking-wide">Expert Insight</h3>
                            <p className="text-neutral-500 leading-relaxed font-light">
                                Meet the team of seasoned analysts providing actionable financial intelligence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
