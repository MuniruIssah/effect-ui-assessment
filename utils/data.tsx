import {
    CountryLeagueCardProps,
    MiscCardProps,
    OtherCollectionCardProps,
    PopularTCardProps,
    ServiceCardProps
} from "@/types/shared";
import SocialMedia from "@/components/SocialMedia";
import {FaCaretDown} from "react-icons/fa";
import React from "react";

export type EffectLink={
    title:string|React.ReactNode,
    to:string
}
const mainMenuLinks:EffectLink[]=[
    {
        title:"Home",
        to:"/"
    },
    {
        title:"T-shirts",
        to:"#"
    },
    {
        title:"NBA",
        to:"#"
    },
    {
        title:"Tracksuits",
        to:"#"
    },    {
        title:"Products Delivery  •  1 – 2 days",
        to:"#"
    },    {
        title:"Contact",
        to:"#"
    },    {
        title:"Reviews",
        to:"#"
    }
]

const mainMenuLinksII:EffectLink[]=[
    {
        title:"Home",
        to:"/"
    },
    {
        title:<div className={'flex items-center space-x-1'}><span>T-shirts</span><FaCaretDown /></div>,
        to:"#"
    },
    {
        title:<div className={'flex items-center space-x-1'}><span>NBA</span><FaCaretDown /></div>,
        to:"#"
    },
    {
        title:<div className={'flex items-center space-x-1'}><span>Tracksuits</span><FaCaretDown /></div>,
        to:"#"
    },    {
        title:"Products Delivery  •  1 – 2 days",
        to:"#"
    },    {
        title:"Contact",
        to:"#"
    },    {
        title:"Reviews",
        to:"#"
    }
]

const secondaryMenuLinks:EffectLink[]=[
    {
        title:"Search",
        to:"/"
    },
    {
        title:"Privacy policy",
        to:"/"
    },
    {
        title:"Shipping Policy",
        to:"/"
    },
    {
        title:"Returns Policy",
        to:"/"
    },    {
        title:"Terms of Service",
        to:"/"
    }

]

const services:ServiceCardProps[]=[
    {
        title:'Secure Shipping',
        description:'on all orders',
        icon:'/icons/svg/truck.svg'
    },
    {
        title:'Telephone',
        description:'+1 23 456 7890',
        icon:'/icons/svg/phone.svg'
    },
    {
        title:'Chat WhatsApp',
        description:'Mon – Fri: 9:00 – 21:00  •  Sat – Sun: 9:00 – 17:00',
        icon:'/icons/svg/whatsapp.svg'
    },
    {
        title:'Quality Guarantee',
        description:'Verified Purchase Reviews',
        icon:'/icons/svg/check-badge.svg'
    }
]


const misc:MiscCardProps[]=[
    {
        title:'PERSONALIZATION',
        image:'/images/personalization.jpg',
        children:<div className={'font-light text-[8px] md:text-base'}>Put a custom print on the football shirt of your choice with our Personalization service. <br/><br/>Tell us what name, what number and we put it. FREE!!!</div>
    },
    {
        title:'SOCIAL NETWORKS',
        image:'/images/social-networks.jpg',
        children:<div className={'font-light text-[8px] md:text-base'}>Share your shirts with us with the #CamisetasFutbolSpainnn<br/><br/><SocialMedia inverted /></div>
    },
]







export {mainMenuLinks,mainMenuLinksII,secondaryMenuLinks,services,misc}