import React from 'react';
import {ServiceCardProps} from "@/types/shared";
import Image from "next/image";

const ServiceCard = ({title,icon,description}:ServiceCardProps) => {
    return (
        <div className={'bg-effect-yellow-faded'}>
            <div className={'relative'}>
                <div className={'w-10 md:w-[72px] h-5 md:h-8 bg-effect-yellow/20 clipped absolute'}></div>
                <div className={'w-5 md:w-8 h-10 md:h-[72px] bg-effect-yellow/40 clipped1 absolute'}></div>
            </div>
            <div className={'p-5 md:p-8 flex flex-col space-y-3'}>
                <div className={'grid place-items-center h-5 w-5 md:h-10 md:w-10 bg-effect-yellow '}>
                   <div className={'md:hidden'}>
                    <Image
                        priority
                        src={icon}
                        height={10}
                        width={10}
                        alt=""
                    />
                   </div>
                    <div className={'hidden md:block'}>
                    <Image
                        priority
                        src={icon}
                        height={16}
                        width={16}
                        alt=""
                    />
                </div>
                </div>
                <h3 className={"font-semibold text-[10px] md:text-base"}>{title}</h3>
                <p className={'font-light text-[8px] md:text-xs'}>{description}</p>
            </div>

        </div>
    );
};

export default ServiceCard;