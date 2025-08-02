import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-40">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="text-xl font-light tracking-wider text-neutral-800 hover:text-neutral-600 transition-colors">
                        1BasisPoint
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-12">
                        <Link
                            to="/"
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${isActive('/') ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Home
                        </Link>

                        {/* About Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <button
                                className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 flex items-center space-x-1 ${isActive('/about-krish') || isActive('/about-rehan')
                                        ? 'text-neutral-800 font-medium'
                                        : 'text-neutral-500'
                                    }`}
                            >
                                <span>About</span>
                                <ChevronDown className="w-3 h-3" />
                            </button>

                            {aboutDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-32 bg-white/95 backdrop-blur-md border border-neutral-200 rounded-lg shadow-lg py-2 z-50">
                                    <Link
                                        to="/about-krish"
                                        className="block w-full text-left px-4 py-2 text-sm text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                                    >
                                        Krish
                                    </Link>
                                    <Link
                                        to="/about-rehan"
                                        className="block w-full text-left px-4 py-2 text-sm text-neutral-500 hover:text-neutral-800 hover:bg-neutral-50"
                                    >
                                        Rehan
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            to="/streettalk"
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${isActive('/streettalk') ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Analysis
                        </Link>

                        <Link
                            to="/research"
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${isActive('/research') ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Research
                        </Link>

                        <Link
                            to="/contact"
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${isActive('/contact') ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-neutral-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-100">
                    <Link
                        to="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Home
                    </Link>

                    <div className="border-l-2 border-neutral-200 ml-6">
                        <div className="px-6 py-2 text-sm font-medium text-neutral-500 tracking-wide">
                            About
                        </div>
                        <Link
                            to="/about-krish"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-left px-8 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                        >
                            Krish
                        </Link>
                        <Link
                            to="/about-rehan"
                            onClick={() => setIsMenuOpen(false)}
                            className="block w-full text-left px-8 py-3 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                        >
                            Rehan
                        </Link>
                    </div>

                    <Link
                        to="/streettalk"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Analysis
                    </Link>

                    <Link
                        to="/research"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Research
                    </Link>

                    <Link
                        to="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
