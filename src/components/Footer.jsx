import React from 'react';

const Footer = () => (
    <footer className="bg-neutral-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
                <div className="mb-12">
                    <span className="text-2xl font-light tracking-wider text-white">INSIGHT</span>
                </div>

                <div className="border-t border-neutral-700 pt-12">
                    <h3 className="text-lg font-light text-white mb-6 tracking-wide">Disclaimer</h3>
                    <p className="text-neutral-400 text-sm leading-relaxed max-w-3xl mx-auto font-light">
                        Content provided is for informational purposes only and should not be construed as financial advice.
                        Past performance does not guarantee future results. All investments carry risk of loss.
                        Consult qualified professionals before making investment decisions.
                        We are not responsible for financial losses based on our content.
                    </p>
                </div>

                <div className="border-t border-neutral-700 pt-8 mt-8">
                    <p className="text-neutral-500 text-xs tracking-wide">
                        © 2025 Financial Insight. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
