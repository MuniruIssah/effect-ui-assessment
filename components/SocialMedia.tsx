import React from 'react';

const SocialMedia =({inverted}:{inverted?:boolean})=>{
        const socialMedia:SocialMediaItemProps[]=[
            {
                source:"/icons/svg/facebook-f.svg",
                altText:"facebook"
            },
            {
                source:"/icons/svg/twitter.svg",
                altText:"twitter"
            },
            {
                source:"/icons/svg/instagram.svg",
                altText:"instagram"
            },
        ]
        return (
            <div className={`${inverted?'invert':''} flex space-x-2 `}>
                {socialMedia.map((item,index)=><SocialMediaItem key={index} {...item} />)}
            </div>
        )
};


export default SocialMedia;




type SocialMediaItemProps={
    source:string,
    altText?:string
}

const SocialMediaItem=({source,altText}:SocialMediaItemProps)=>{
    return (
        <div className={'w-8 h-8 bg-effect-black grid place-items-center'}>
            <img src={source} alt={altText??""}/>
        </div>
    )
}
