import React from 'react';
import {countryLeagues} from "@/utils/data";
import CountryLeagueCard from "@/components/countryLeagueCard";
import {CountryLeagueCardProps} from "@/types/shared";

async function getCountryLeagues() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/product-category')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

type CountryLeaguesData={
    id:number,
    slug:string,
    sub_categories:CountryLeagueCardProps[]
}
const CountryLeagues = async () => {
    const {categories:{data}}=await getCountryLeagues();
    const newData =data as CountryLeaguesData[];
    const cLeagues=newData.filter((item:CountryLeaguesData)=>item.slug==='country-leagues')[0]

    return (
        <div className={'flex flex-col space-y-7 md:space-y-20'}>
            <h1 className={'text-2xl md:text-3xl font-extrabold uppercase'}>Country Leagues</h1>
            <div className={'grid grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-5'}>
                {cLeagues.sub_categories.map((item,index)=><CountryLeagueCard key={index} {...item}/>)}
            </div>
        </div>
    );
};

export default CountryLeagues;