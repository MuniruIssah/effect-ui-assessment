import React from 'react';
import OtherCollectionCard from "@/components/otherCollectionCard";
import {OtherCollectionCardProps} from "@/types/shared";

async function getOtherCollections() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/product-category?page=3')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

type OtherCollectionsData={
    id:number,
    slug:string,
    sub_categories:OtherCollectionCardProps[]
}
const OtherCollections =  async () => {
    const {categories:{data}}=await getOtherCollections();
    const newData =data as OtherCollectionsData[];
    const others=newData.filter((item:OtherCollectionsData)=>item.slug==='others')[0]
    return (
        <div className={'flex flex-col space-y-7 md:space-y-20'}>
            <h1 className={'text-2xl md:text-3xl font-extrabold uppercase'}>Other Collections</h1>
            <div className={'grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-10'}>
                {others.sub_categories.map((item,index)=><OtherCollectionCard key={index}  {...item}/>)}
            </div>
        </div>
    );
};

export default OtherCollections;