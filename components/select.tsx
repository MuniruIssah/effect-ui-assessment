import React from 'react';

interface EffectSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement>{
    options:string[]
}
const Select = ({options,...rest}:EffectSelectProps) => {
    return (
        <select {...rest} className={'h-full w-full text-[8px] md:text-xs px-3 py-2 text-effect-black/40 border border-effect-gray outline-0'}>
            <option className={''}  value="" disabled selected hidden>{rest.placeholder}</option>
            {options.length>0&&<>{options.map((item,index)=><option value={item} key={index}>{item}</option>)}</>}
        </select>
    );
};

export default Select;