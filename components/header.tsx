"use client"

import React from 'react';
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import Dropdown from "@/components/dropdown";
import Link from "next/link";
import {EffectLink, mainMenuLinksII} from "@/utils/data";
import MobileHeader from "@/components/mobileHeader";
import {FaCaretDown} from 'react-icons/fa'
const LayoutHeader = () => {
    return (
        <div className={'border-b border-effect-gray'}>
            <HeaderTopSection/>
            <HeaderBottomSection/>
            <MobileHeader/>
        </div>
    );
};

export default LayoutHeader;

const HeaderTopSection=()=>{
    return (
        <div className={"flex items-center bg-effect-black p-0"}>
            <div className={'bg-white/10 py-2 text-white flex items-center justify-center space-x-2 px-4 md:w-44'}>
                <Image
                    priority
                    src="/icons/svg/globe.svg"
                    height={12}
                    width={12}
                    alt="Language"
                />
                <Dropdown active={"EN"}/>
            </div>
            <div className={'flex-1 flex justify-center  py-2 px-4 overflow-x-auto'}>
                <span className={'text-white text-xs ml-28  md:ml-0 whitespace-nowrap'}>SALES BEGIN  •  FREE SHIPPING ON ALL ORDERS</span>
            </div>
            <button className={'bg-effect-green text-white flex items-center justify-center space-x-2  py-2 px-4  md:w-44'}>
                <Image
                    priority
                    src="/icons/svg/whatsapp.svg"
                    height={16}
                    width={16}
                    alt="Chat with us"
                />
                <span className={'text-xs'}>Chat <span className={'hidden md:inline'}>with us</span></span>
            </button>
        </div>
    )
}

const HeaderBottomSection=()=>{
    return (
        <div className={'w-full hidden md:flex'}>
            <div className={"bg-effect-yellow w-44"}>
            </div>
            <div className={'flex-1 flex flex-col divide-y divide-effect-gray '}>
                <div className={'w-full flex items-center divide-x divide-effect-gray h-14'}>
                    <div className={'px-6 grid place-items-center'}>
                        {/*<Dropdown active={"All Categories"}/>*/}
                        <div className={'text-xs text-effect-black/90 font-medium flex items-center space-x-2'}>
                            <span>All Categories</span>
                            <FaCaretDown />
                        </div>

                    </div>
                    <div className={'flex-1 flex space-x-3 px-6 py-2'}>
                        <input type="text" className={'flex-1 text-effect-black/50 placeholder:text-effect-black/50 placeholder:font-light outline-0'} placeholder={"What are you looking for?"}/>
                        <button className={'flex  items-stretch h-full'}>
                            <div className={'bg-effect-yellow px-5 py-2 hidden lg:flex'}><span className={'text-xs'}>Search</span></div>
                            <div className={'bg-effect-black grid place-items-center px-5 py-2 lg:p-2'}>
                                <Image
                                    priority
                                    src="/icons/svg/search.svg"
                                    height={16}
                                    width={16}
                                    alt="Chat with us"
                                />
                            </div>
                        </button>
                    </div>
                    <div className={'h-full px-5 lg:w-28 grid place-items-center'}>
                        <Image
                            priority
                            src="/icons/svg/shopping-cart.svg"
                            height={20}
                            width={20}
                            alt="cart"
                        />
                    </div>
                    <div className={'h-full px-5 lg:w-28 flex justify-center items-center space-x-0.5'}>
                        <Image
                            priority
                            src="/icons/svg/user.svg"
                            height={20}
                            width={20}
                            alt="user"
                        />
                        <FaCaretDown size={10} />

                    </div>
                </div>
                <div className={'h-8 border-b border-effect-gray px-5 flex  space-x-5 overflow-x-auto'}>
                    {mainMenuLinksII.map((item,index)=><HeaderLink key={index} {...item} />)}
                </div>
            </div>
        </div>
    )
}


const HeaderLink=({title,to}:EffectLink)=>{
    const currentRoute = usePathname();
    const isActive=currentRoute === to
    return(
        <Link href={to}
              className={`h-full  text-xs whitespace-nowrap  font-semibold grid place-items-center hover:text-effect-black transition-all ease-in-out ${isActive?'text-effect-black border-b-2 border-effect-yellow':'text-effect-black/50'}`}>
            <span>{title}</span>
        </Link>
    )
}

