"use client"
import React, {useState} from 'react';

type ProductDescription={
    description:string
}
const ProductDescriptionText = ({description}:ProductDescription) => {
    const [toggleHeight,setToggleHeight]=useState(false);
    const handleHeightToggle=()=>setToggleHeight(prevState => !prevState);
    return (
        <div className={'flex flex-col'}>
            <div className={`text-xs md:text-sm font-light  ${toggleHeight?"h-20":''} overflow-hidden`} dangerouslySetInnerHTML={{__html:description}}/>
            <button type={"button"} onClick={handleHeightToggle} className={'self-end underline font-medium text-xs'}>{toggleHeight?"Read More":"Collapse"}</button>
        </div>

    );
};

export default ProductDescriptionText;