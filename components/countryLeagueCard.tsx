import React from 'react';
import {CountryLeagueCardProps} from "@/types/shared";

const CountryLeagueCard = ({title,image}:CountryLeagueCardProps) => {
    return (
        <div className={' h-52 md:h-72 flex flex-col space-y-3'}>
            <div className={'flex-1 bg-cover bg-no-repeat bg-center h-48 md:h-[257px] p-8 flex flex-col space-y-5 justify-end text-white'} style={{backgroundImage:`url(${image})`}}></div>
            <span className={'font-semibold text-[10px] md:text-base'}>{title}</span>
        </div>
    );
};

export default CountryLeagueCard;