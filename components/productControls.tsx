"use client"

import React from 'react';
import Controls from "@/components/controls";

const ProductControls = () => {

    const handleScrollLeft=()=>{
        const products=document.getElementById('products');
        if(products)
            products.scrollLeft=products.scrollLeft-240;
    }
    const handleScrollRight=()=>{
        const products=document.getElementById('products');
        if(products)
            products.scrollLeft=products.scrollLeft+240;
    }
    return (
        <div className={'flex items-center justify-between'}>
            <h1 className={'text-2xl md:text-3xl font-extrabold'}>MOST POPULAR T-SHIRTS</h1>
            <Controls handlePrevious={handleScrollLeft} handleNext={handleScrollRight} />
        </div>
    );
};

export default ProductControls;