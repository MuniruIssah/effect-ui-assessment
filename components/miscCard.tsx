import React from 'react';
import {MiscCardProps} from "@/types/shared";


const MiscCard = ({title,image,children}:MiscCardProps) => {
    return (
        <div className={'bg-cover bg-no-repeat h-[220px] md:h-[400px] p-8 flex flex-col space-y-5 justify-end text-white'} style={{backgroundImage:`linear-gradient(90deg, #111112 0%, rgba(17, 17, 18, 0) 100%),url(${image})`}}>
            <h2 className={'font-semibold lg:text-2xl'}>{title}</h2>
            {children}
        </div>
    );
};

export default MiscCard;