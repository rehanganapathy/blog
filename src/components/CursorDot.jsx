import React from 'react';

const CursorDot = ({ mousePosition }) => (
    <div
        className="fixed pointer-events-none z-50 transition-all duration-200 ease-out"
        style={{
            left: mousePosition.x,
            top: mousePosition.y,
            transform: 'translate(-50%, -50%)',
        }}
    >
        <div className="w-1 h-1 bg-neutral-800 rounded-full opacity-60" />
    </div>
);

export default CursorDot;
