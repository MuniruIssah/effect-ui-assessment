'use client'

import React, {useState} from 'react';
import Image from "next/image";
import {BannerProps} from "@/app/page";

const Banner = ({banners}:{banners:BannerProps[]}) => {
    const [activeStep,setActiveStep]=useState(0)
    const currentItem=banners.filter(item=>item.position==activeStep)[0];
    const currentBanner=currentItem.image;
    const currentContent=currentItem.content;
    const handleSetActiveStep=(step:number)=>setActiveStep(step);
    return (
        <div className={'w-full h-96 p-5 md:p-10 lg:p-16 flex flex-col justify-between mb-5 lg:mb-12 bg-no-repeat bg-cover bg-center'} style={{backgroundImage:`linear-gradient(90deg, #111112 0%, rgba(17, 17, 18, 0) 100%),url(${currentBanner})`}} >
            <div className={'text-2xl md:text-4xl font-bold text-white'} dangerouslySetInnerHTML={{__html:currentContent??tempBannerHtml}}/>

            <div className={'flex justify-between items-end'}>
                <BannerSliderSteps steps={5} activeStep={activeStep} handleStepChange={handleSetActiveStep}/>
                <button className={'bg-effect-black/40 backdrop-blur-md border border-white text-white flex items-center'}>
                    <span className={'text-xs px-5'}>Shop Now</span>
                    <div className={'bg-white w-8 h-8 md:w-10 md:h-10 grid place-items-center'}>
                        <Image
                            priority
                            src="/icons/svg/bag.svg"
                            height={15}
                            width={14}
                            alt="Chat with us"
                        />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Banner;

type BannerSliderStepsProps={
    steps:number,
    activeStep:number,
    handleStepChange:(step:number)=>void
}
const BannerSliderSteps=({steps,activeStep,handleStepChange}:BannerSliderStepsProps)=>{
    return(
        <div className={'flex space-x-1 lg:space-x-3'}>
            {new Array(steps).fill(0).map((_,index)=><BannerSliderStep key={index} isActive={activeStep===index} handleStepChange={()=>handleStepChange(index)}/>)}
        </div>
    );

}
type BannerSliderStepProps={
    isActive:boolean,
    handleStepChange:()=>void
}
const BannerSliderStep=({isActive,handleStepChange}:BannerSliderStepProps)=>{
    return(
        <div className={`w-8 h-1 lg:w-20 md:h-2 cursor-pointer ${isActive?'bg-effect-yellow':'bg-white/20'} `} onClick={handleStepChange}></div>
    )
}

const tempBannerHtml="<h1 className='text-2xl md:text-4xl font-bold'><span className={'text-white'}>Your favorite customized</span><br/> <span className={'text-effect-yellow'}>Club Jerseys.</span> </h1>"