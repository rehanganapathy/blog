import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import useBlogPosts from '../hooks/useBlogPosts';
import { Link } from 'react-router-dom';

const AnalysisPage = () => {
    const articles = useBlogPosts();

    return (
        <div className="pt-32 pb-24 bg-white min-h-screen">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-5xl font-extralight text-neutral-800 mb-20 text-center tracking-tight">
                    Analysis
                </h1>

                <div className="space-y-16">
                    {articles.map((article) => (
                        <article
                            key={article.slug}
                            className="group cursor-pointer border-b border-neutral-100 pb-16"
                        >
                            <Link to={`/analysis/${article.slug}`}>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center space-x-4 text-sm text-neutral-500">
                                        <span>{article.date}</span>
                                        <div className="w-1 h-1 bg-neutral-300 rounded-full" />
                                        <span>{article.readTime}</span>
                                        <span>{article.author}</span>
                                    </div>
                                </div>
                                <h2 className="text-2xl font-light text-neutral-800 mb-4 group-hover:text-neutral-600 transition-colors tracking-wide">
                                    {article.title}
                                </h2>
                                <p className="text-neutral-600 leading-relaxed mb-6 font-light">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center text-neutral-800 group-hover:text-neutral-600 transition-colors">
                                    <span className="text-sm tracking-wide mr-2">Read more</span>
                                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnalysisPage;
