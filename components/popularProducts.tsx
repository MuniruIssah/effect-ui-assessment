import React from 'react';
import PopularTCard from "@/components/popularTCard";
import {PopularTCardProps} from "@/types/shared";
import ProductControls from "@/components/productControls";

async function getPopularProducts() {
    const res = await fetch('https://camiestas-futbol.effectstudios.co/api/v1/popular-products')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

type VariantProps={price:string};
type GalleryProps={image:string};

type PopularProductsData={
    product_name:string,
    slug:string,
    gallery:GalleryProps[],
    variants: VariantProps[]
};
const PopularProducts = async () => {
    const {products:{data}}=await getPopularProducts();
    let productsData=data as PopularProductsData[];
    let productList=productsData.map((item):PopularTCardProps=>({
        image:item.gallery[0].image,
        title:item.product_name,
        price:item.variants[0].price,
        discount:'0',
        discountPercent:'0',
        slug:item.slug
    }))



    return (
        <div className={'flex flex-col space-y-7 md:space-y-20'}>
            <ProductControls/>
            <div className={'flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-10'} id={'products'}>
                {productList.map((item,index)=><PopularTCard key={index} {...item} />)}
            </div>
        </div>
    );
};

export default PopularProducts;