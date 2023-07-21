import Image from 'next/image'
import Banner from "@/components/banner";
import { misc, services} from "@/utils/data";
import ServiceCard from "@/components/serviceCard";
import React from "react";
import MiscCard from "@/components/miscCard";
import PopularProducts from "@/components/popularProducts";
import OtherCollections from "@/components/otherCollections";
import CountryLeagues from "@/components/countryLeagues";

async function getBanners() {
    const res = await fetch(`https://camiestas-futbol.effectstudios.co/api/v1/banner`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export type BannerProps={
    position:number,
    image:string,
    content?:string,
    btn_text?:string
}

export default async function Home() {
    const {banners: {data}}=await getBanners();
    const banners=data as BannerProps[]

  return (
    <main className="w-full max-w-screen-2xl mx-auto md:p-10 flex flex-col">
      <Banner banners={banners}/>
        <div className={'grid grid-cols-2 lg:grid-cols-4 gap-5 mb-5 p-3 md:p-0'}>
          {services.map((item,index)=><ServiceCard key={index} {...item}/>)}
        </div>
        <div className={'relative mb-12'}>
            <div className={'absolute md:-left-10'}>
                <Image
                    priority
                    src="/icons/svg/rewards-badge.svg"
                    height={48}
                    width={139}
                    alt=""
                />
            </div>
        </div>
        <div className={'p-3 md:p-0 flex flex-col space-y-20 mb-16 md:my-16'}>
            <PopularProducts/>
            <CountryLeagues/>
            <OtherCollections/>
            <div className={'grid md:grid-cols-2 gap-10'}>
                {misc.map((item,index)=><MiscCard key={index} {...item}/>)}
            </div>
        </div>
    </main>
  )
}
