import React from 'react';

const ResearchPage = () => (
    <div className="pt-32 pb-24 bg-neutral-50 min-h-screen">
        <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-5xl font-extralight text-neutral-800 mb-20 text-center tracking-tight">
                Research
            </h1>

            <div className="grid md:grid-cols-2 gap-8">
                {[
                    {
                        title: "Artificial Intelligence in Finance",
                        status: "In Progress",
                        description: "Comprehensive analysis of AI adoption across banking, investment management, and financial services.",
                        completion: "75%"
                    },
                    {
                        title: "ESG Investment Performance",
                        status: "Published",
                        description: "Five-year comparative study of environmental, social, and governance investment strategies.",
                        completion: "Complete"
                    },
                    {
                        title: "Cryptocurrency Market Structure",
                        status: "Under Review",
                        description: "Analysis of digital asset correlations with traditional financial instruments and market dynamics.",
                        completion: "90%"
                    },
                    {
                        title: "Supply Chain Finance",
                        status: "Planning",
                        description: "Impact assessment of geopolitical tensions on international trade financing mechanisms.",
                        completion: "25%"
                    },
                    {
                        title: "Central Bank Digital Currencies",
                        status: "In Progress",
                        description: "Comparative analysis of CBDC implementations across major global economies.",
                        completion: "60%"
                    },
                    {
                        title: "Climate Financial Risk",
                        status: "Published",
                        description: "Quantitative framework for assessing climate-related risks in financial portfolios.",
                        completion: "Complete"
                    }
                ].map((project, index) => (
                    <div key={index} className="bg-white p-8 border border-neutral-200 group hover:border-neutral-300 transition-colors cursor-pointer">
                        <div className="flex justify-between items-start mb-6">
                            <span className={`text-xs tracking-wider uppercase ${project.status === 'Published' ? 'text-green-600' :
                                    project.status === 'In Progress' ? 'text-blue-600' :
                                        project.status === 'Under Review' ? 'text-orange-600' :
                                            'text-neutral-500'
                                }`}>
                                {project.status}
                            </span>
                            <span className="text-xs text-neutral-500 tracking-wide">{project.completion}</span>
                        </div>

                        <h3 className="text-xl font-light text-neutral-800 mb-4 group-hover:text-neutral-600 transition-colors tracking-wide">
                            {project.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed font-light text-sm">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ResearchPage;
