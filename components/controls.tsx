"use client"
import React from 'react';
import Image from "next/image";

type ControlsProp={
    handlePrevious:()=>void,
    handleNext:()=>void
}
const Controls = ({handlePrevious,handleNext}:ControlsProp) => {
    return (
        <div className={'flex gap-2'}>
            <Control icon={'/icons/svg/left.svg'} handleControl={handlePrevious}/>
            <Control icon={'/icons/svg/right.svg'} handleControl={handleNext}/>
        </div>
    );
};

export default Controls;


type ControlProps={
    icon:string,
    handleControl:()=>void
}
const Control=({icon,handleControl}:ControlProps)=>{
    return(
        <button className={'w-8 h-8 border border-effect-black grid place-items-center'} onClick={handleControl}>
            <Image
                priority
                className={'invert'}
                src={icon}
                height={6}
                width={6}
                alt=""
            />
        </button>
    );
}
