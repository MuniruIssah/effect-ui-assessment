'use client'
import React, {useMemo, useState} from 'react';
import Image from "next/image";
import Controls from "@/components/controls";

export type ProductCarouselProps={id:string,image:string,position:number}
const ProductCarousel = ({gallery}:{gallery:ProductCarouselProps[]}) => {
    const [activeImage,setActiveImage]=useState(1)
    const handleSetActiveImage=(value:number)=>setActiveImage(value)
    const handlePrevious=()=>{
        let newValue=activeImage-1<1?1:activeImage-1;
        handleSetActiveImage(newValue)
    }

    const handleNext=()=>{
        let newValue=activeImage+1>gallery.length?activeImage:activeImage+1
        handleSetActiveImage(newValue)
    }
    const mainImage=useMemo(()=>gallery.filter(item=>item.position==activeImage)[0].image,[activeImage])
    return (
        <div className={'h-full flex flex-col gap-4'}>
            <div className={'flex-1 w-full max-h-[70vh] bg-effect-black min-h-[358px] bg-cover bg-center bg-no-repeat flex items-end justify-end p-5'} style={{backgroundImage:`url(${mainImage})`}}>
                <Controls handlePrevious={handlePrevious} handleNext={handleNext} />
            </div>
            <div className={'grid grid-cols-6 gap-2'}>
                {new Array(gallery.length).fill(0).map((_,index)=>
                    <CarouselThumb key={index} image={gallery.filter(item=>item.position==index+1)[0].image} isActive={index+1===activeImage} />)}
            </div>
        </div>
    );
};

export default ProductCarousel;

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

type CarouselThumbProps={
    image:string,
    isActive?:boolean,

}
const CarouselThumb=({image,isActive}:CarouselThumbProps)=>{
    return(
        <div className={`h-12 md:h-20 bg-cover bg-center bg-no-repeat relative`} style={{backgroundImage:`url(${image})`}} >
            {!isActive&&<div className={'h-20 bg-white/50 bg-blend-color'}></div>}
            {isActive&&<div className={'absolute -top-2.5 w-full flex justify-center'}>
                <Image
                    priority
                    src='/icons/svg/down.svg'
                    height={6}
                    width={7}
                    alt=""
                />
            </div>}
        </div>
    )
}