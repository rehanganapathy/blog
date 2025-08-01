import React from 'react';
import { Mail, Clock } from 'lucide-react';

const ContactPage = () => (
    <div className="pt-32 pb-24 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
            <h1 className="text-5xl font-extralight text-neutral-800 mb-20 text-center tracking-tight">
                Contact
            </h1>

            <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-xl font-light text-neutral-800 mb-8 tracking-wide">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <Mail className="w-5 h-5 text-neutral-600 mt-1" />
                                <div>
                                    <p className="text-neutral-800 font-light">Email</p>
                                    <p className="text-neutral-600 text-sm"></p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <Clock className="w-5 h-5 text-neutral-600 mt-1" />
                                <div>
                                    <p className="text-neutral-800 font-light">Response Time</p>
                                    <p className="text-neutral-600 text-sm">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full px-0 py-4 border-0 border-b border-neutral-200 bg-transparent text-neutral-800 placeholder-neutral-500 focus:border-neutral-800 focus:outline-none transition-colors font-light"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-0 py-4 border-0 border-b border-neutral-200 bg-transparent text-neutral-800 placeholder-neutral-500 focus:border-neutral-800 focus:outline-none transition-colors font-light"
                        />
                    </div>
                    <div>
                        <textarea
                            rows="4"
                            placeholder="Message"
                            className="w-full px-0 py-4 border-0 border-b border-neutral-200 bg-transparent text-neutral-800 placeholder-neutral-500 focus:border-neutral-800 focus:outline-none transition-colors resize-none font-light"
                        ></textarea>
                    </div>
                    <button className="w-full py-4 bg-neutral-800 text-white font-light tracking-wide hover:bg-neutral-700 transition-colors mt-8">
                        Send Message
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;
