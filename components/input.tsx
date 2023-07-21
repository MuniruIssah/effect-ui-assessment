import React from 'react';

const Input = (props:React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input {...props} className={'h-full w-full text-[8px] md:text-xs px-3 py-2 text-effect-black border border-effect-gray outline-0'} />
    );
};

export default Input;