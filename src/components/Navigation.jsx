import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <div
                        className="cursor-pointer group"
                        onClick={() => setCurrentPage('home')}
                    >
                        <span className="text-xl font-light tracking-wider text-neutral-800 group-hover:text-neutral-600 transition-colors">
                            1BasisPoint
                        </span>
                    </div>
                    <div className="hidden md:flex space-x-12">
                        <button
                            onClick={() => setCurrentPage('home')}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${currentPage === 'home' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Home
                        </button>

                        {/* About Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <button
                                className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 flex items-center space-x-1 ${currentPage === 'about-krish' || currentPage === 'about-rehan' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                    }`}
                            >
                                <span>About</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>

                            {aboutDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-32 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg py-2">
                                    <button
                                        onClick={() => setCurrentPage('about-krish')}
                                        className={`block w-full text-left px-4 py-2 text-sm tracking-wide transition-colors hover:text-neutral-800 hover:bg-neutral-50 ${currentPage === 'about-krish' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                            }`}
                                    >
                                        Krish
                                    </button>
                                    <button
                                        onClick={() => setCurrentPage('about-rehan')}
                                        className={`block w-full text-left px-4 py-2 text-sm tracking-wide transition-colors hover:text-neutral-800 hover:bg-neutral-50 ${currentPage === 'about-rehan' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                            }`}
                                    >
                                        Rehan
                                    </button>
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => setCurrentPage('streettalk')}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${currentPage === 'streettalk' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Analysis
                        </button>

                        <button
                            onClick={() => setCurrentPage('research')}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${currentPage === 'research' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Research
                        </button>

                        <button
                            onClick={() => setCurrentPage('contact')}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${currentPage === 'contact' ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Contact
                        </button>
                    </div>

                    <button
                        className="md:hidden text-neutral-800"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-100">
                    <button
                        onClick={() => {
                            setCurrentPage('home');
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Home
                    </button>

                    {/* About section with sub-items */}
                    <div className="border-l-2 border-neutral-200 ml-6">
                        <div className="px-6 py-2 text-sm font-medium text-neutral-500 tracking-wide">
                            About
                        </div>
                        <button
                            onClick={() => {
                                setCurrentPage('about-krish');
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-8 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                        >
                            Krish
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage('about-rehan');
                                setIsMenuOpen(false);
                            }}
                            className="block w-full text-left px-8 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                        >
                            Rehan
                        </button>
                    </div>

                    <button
                        onClick={() => {
                            setCurrentPage('streettalk');
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Analysis
                    </button>

                    <button
                        onClick={() => {
                            setCurrentPage('research');
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Research
                    </button>

                    <button
                        onClick={() => {
                            setCurrentPage('contact');
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Contact
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
