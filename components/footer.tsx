import React from 'react';
import Image from 'next/image'
import {EffectLink, mainMenuLinks, secondaryMenuLinks} from "@/utils/data";
import Link from "next/link";
import SocialMedia from "@/components/SocialMedia";
const LayoutFooter = () => {
    return (
        <div className={'w-full bg-effect-footer-gray divide-y divide-effect-gray'}>
            <FooterTopSection/>
            <FooterBottomSection/>
        </div>
    );
};

export default LayoutFooter;

const FooterTopSection=()=>{
    return (
        <div className={"w-full px-4 md:px-14 py-10 md:py-24 grid md:grid-cols-2 lg:grid-cols-4 gap-10  md:gap-32"}>
            <FooterColumn title={"Main Menu"}>
                <FooterLinksList links={mainMenuLinks}  />
            </FooterColumn>
            <FooterColumn title={"Secondary Menu"}>
                <FooterLinksList links={secondaryMenuLinks}  />
            </FooterColumn>
            <FooterColumn title={"Subscribe"}>
                <FooterForm/>
            </FooterColumn>
            <FooterColumn title={"Follow Us"}>
                <SocialMedia />
            </FooterColumn>
            <div className={'md:hidden w-full'}>
                <img src="/payment-partners.png" alt="partners"/>
            </div>
        </div>
    )
}

const FooterBottomSection=()=>{
    return (
        <div className={'w-full flex items-center justify-between px-4 md:px-14 py-5'}>
            <span className={"text-xs font-light"}>© 2021 Jambulani • All rights reserved</span>
            <div className={'hidden md:flex'}>
                <Image
                    src="/payment-partners.png"
                    alt="Payment"
                    width={260}
                    height={70}
                    priority
                />
            </div>
        </div>
    )
}

interface FooterColumnProps extends React.PropsWithChildren{
    title:string
}

const FooterColumn=(props:FooterColumnProps)=>{
    return (
        <div className={'flex flex-col space-y-4'}>
            <h5 className={"font-semibold"}>{props.title}</h5>
            <div>
                {props.children}
            </div>
        </div>
    )
}


const FooterLinksList=(props:{links:EffectLink[]})=>{
    return (
        <div className={'flex flex-col space-y-3 text-sm text-effect-black font-light'}>
            {props.links.map((item,index)=><Link key={index} href={item.to}>{item.title}</Link>)}
        </div>
    )
}

const FooterForm=()=>{
    return (
        <div className={"w-full flex flex-col space-y-4"}>
            <p className={"text-sm font-light"}>Subscribe to our mailing list to <br/>receive the latest news.</p>
            <form className={"flex w-full items-center h-10"}>
                <input className={"w-4/5 h-full border border-effect-gray px-3 py-1 placeholder:text-xs"} placeholder={"Email Address"}/>
                <button className={"bg-effect-yellow h-10 w-16 grid place-items-center"}>
                    <img src="/icons/svg/paper-plane.svg" alt="send"/>
                </button>
            </form>
        </div>
    )
}
