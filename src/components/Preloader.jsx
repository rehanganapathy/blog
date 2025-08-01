import React from 'react';

const Preloader = () => (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="text-center">
            <div className="w-8 h-8 border border-neutral-300 border-t-neutral-800 rounded-full animate-spin mx-auto mb-8"></div>
            <div className="space-y-2">
                <div className="text-2xl font-light tracking-wider text-neutral-800">INSIGHT</div>
                <div className="text-sm text-neutral-500 tracking-wide">Loading...</div>
            </div>
        </div>
    </div>
);

export default Preloader;
