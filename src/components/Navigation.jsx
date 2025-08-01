import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage, isMenuOpen, setIsMenuOpen }) => (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100 z-40">
        <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
                <div
                    className="cursor-pointer group"
                    onClick={() => setCurrentPage('home')}
                >
                    <span className="text-xl font-light tracking-wider text-neutral-800 group-hover:text-neutral-600 transition-colors">
                        INSIGHT
                    </span>
                </div>

                <div className="hidden md:flex space-x-12">
                    {[
                        { key: 'home', label: 'Home' },
                        { key: 'about', label: 'About' },
                        { key: 'streettalk', label: 'Analysis' },
                        { key: 'research', label: 'Research' },
                        { key: 'contact', label: 'Contact' }
                    ].map((item) => (
                        <button
                            key={item.key}
                            onClick={() => setCurrentPage(item.key)}
                            className={`text-sm tracking-wide transition-all duration-300 hover:text-neutral-800 ${currentPage === item.key ? 'text-neutral-800 font-medium' : 'text-neutral-500'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
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
                {[
                    { key: 'home', label: 'Home' },
                    { key: 'about', label: 'About' },
                    { key: 'streettalk', label: 'Analysis' },
                    { key: 'research', label: 'Research' },
                    { key: 'contact', label: 'Contact' }
                ].map((item) => (
                    <button
                        key={item.key}
                        onClick={() => {
                            setCurrentPage(item.key);
                            setIsMenuOpen(false);
                        }}
                        className="block w-full text-left px-6 py-4 text-neutral-600 hover:text-neutral-800 hover:bg-neutral-50 transition-colors"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        )}
    </nav>
);

export default Navigation;
