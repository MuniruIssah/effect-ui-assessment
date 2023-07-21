import React from 'react';
import {PopularTCardProps} from "@/types/shared";
import Link from "next/link";

const PopularTCard = ({title,price,slug,discount,discountPercent,image}:PopularTCardProps) => {
    return (
        <Link href={`/${slug}`} className={'w-60 snap-start flex-shrink-0 border border-effect-gray '}>
            <div className={'flex-1 bg-cover bg-no-repeat h-[240px] p-4 flex flex-col space-y-5 justify-end text-white'} style={{backgroundImage:`url(${image})`}}>
                {parseInt(discountPercent)!=0&&<div className={'self-start text-white bg-effect-green px-2 py-1.5 text-xs'}><span>Save {discountPercent}%</span></div>}
            </div>
            <div className={'p-4 flex flex-col space-y-2'}>
                <span className={'font-light'}>{title}</span>
                <div className={'flex items-center space-x-2'}>
                    <span className={'text-effect-black text-xl font-semibold'}>€{price}</span>
                    {parseInt(discount)!=0&&<span className={'text-effect-red text-xs line-through'}>€{discount}</span>}
                </div>
            </div>

        </Link>
    );
};

export default PopularTCard;