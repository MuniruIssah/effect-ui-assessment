import React from 'react';
import {OtherCollectionCardProps} from "@/types/shared";
import Image from "next/image";

const OtherCollectionCard = ({title,image}:OtherCollectionCardProps) => {
    return (
        <div className={'bg-cover bg-no-repeat h-40 md:h-60 flex items-end'} style={{backgroundImage:`url(${image})`}}>
            <div className={'flex w-full h-8 md:h-12'}>
                <div className={'flex-1 h-full flex items-center px-2 md:px-6 bg-effect-black/40 backdrop-blur-md text-white'}>
                    <span className={'text-white text-[10px] md:text-base'}>{title}</span>
                </div>
                <button className={'h-8 w-8 md:h-12 md:w-12 bg-effect-yellow grid place-items-center'}>
                    <Image
                        priority
                        className={'invert'}
                        src='/icons/svg/right.svg'
                        height={7}
                        width={6}
                        alt=""
                    />
                </button>
            </div>
        </div>
    );
};

export default OtherCollectionCard;