import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const AnalysisPage = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-5xl font-extralight text-neutral-800 mb-20 text-center tracking-tight">
                Analysis
            </h1>

            <div className="space-y-16">
                {[
                    {
                        title: "Federal Reserve Policy Implications",
                        excerpt: "Examining the latest FOMC decisions and their broader implications for equity markets, bond yields, and currency dynamics.",
                        date: "August 1, 2025",
                        readTime: "8 min"
                    },
                    {
                        title: "Technology Sector Earnings Review",
                        excerpt: "A comprehensive analysis of Q2 earnings from major technology companies, identifying key trends and investment opportunities.",
                        date: "July 28, 2025",
                        readTime: "12 min"
                    },
                    {
                        title: "Emerging Markets Outlook",
                        excerpt: "Exploring opportunities in developing economies as global investment patterns shift toward higher-yielding assets.",
                        date: "July 25, 2025",
                        readTime: "15 min"
                    }
                ].map((article, index) => (
                    <article key={index} className="group cursor-pointer border-b border-neutral-100 pb-16">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-4 text-sm text-neutral-500">
                                <span>{article.date}</span>
                                <div className="w-1 h-1 bg-neutral-300 rounded-full"></div>
                                <span>{article.readTime}</span>
                            </div>
                        </div>
                        <h2 className="text-2xl font-light text-neutral-800 mb-4 group-hover:text-neutral-600 transition-colors tracking-wide">
                            {article.title}
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-6 font-light">{article.excerpt}</p>
                        <div className="flex items-center text-neutral-800 group-hover:text-neutral-600 transition-colors">
                            <span className="text-sm tracking-wide mr-2">Read more</span>
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </div>
);

export default AnalysisPage;
