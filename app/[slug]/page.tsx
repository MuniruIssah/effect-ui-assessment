import React from 'react';
import Image from "next/image";
import ProductForm from "@/components/productForm";
import ProductCarousel, {ProductCarouselProps} from "@/components/productCarousel";
import Breadcrumb from "@/components/breadcrumb";
import ProductDescriptionText from "@/components/productDescription";

async function getProduct(slug:string) {
    const res = await fetch(`https://camiestas-futbol.effectstudios.co/api/v1/product-single/${slug}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}


type ProductDescriptionData={
    product_name:string,
    description:string,
    gallery:ProductCarouselProps[],
    categories:{title:string}[],
    patches:{id:string,title:string}[],
    variants:{price:string,attributes:{title:string}[]}[]
}
const ProductDescription = async ({params: { slug }}: {params: { slug: string }}) => {
    const {product}=await getProduct(slug)
    const productDescription=product as ProductDescriptionData

    const patches=productDescription.patches.map(item=>item.title);
    const sizes=productDescription.variants.map(item=>item.attributes[0].title);
    return (
        <div className={'w-full max-w-screen-2xl mx-auto px-3 md:px-44 py-6 relative'}>
        {/*   Breadcrumb */}
            <Breadcrumb category={productDescription.categories[0].title} item={productDescription.product_name}/>
        {/*    Main Content*/}
            <div className={'w-full grid lg:grid-cols-2 gap-10 lg:gap-20 py-10'}>
                <ProductCarousel gallery={productDescription.gallery} />
                <div className={'flex flex-col space-y-10'}>
                    <div className={'flex flex-col space-y-3'}>
                    <h2 className={'text-effect-black text-xl md:text-2xl font-semibold'}>{productDescription.product_name}</h2>
                    <div className={'flex justify-between items-center'}>
                        <div className={'flex items-center space-x-1 md:space-x-3'}>
                            <span className={'text-effect-black text-2xl md:text-4xl font-semibold'}>€{productDescription.variants[0].price}</span>
                            {/*<span className={'text-effect-red line-through text-xs md:text-base'}>€30.00</span>*/}
                            {/*<span className={'bg-effect-green text-[8px] md:text-xs text-white p-2'}>Save 67%</span>*/}
                        </div>
                        <button className={'border border-effect-gray flex items-center space-x-2 text-xs p-2'}>
                            <Image
                                priority
                                src="/icons/svg/heart-outline.svg"
                                height={11}
                                width={12}
                                alt=""
                            />
                            <span className={'hidden md:inline'}>Add to Favorites</span>
                        </button>

                    </div>
                    </div>
                    <ProductDescriptionText description={productDescription.description} />
                    <ProductForm sizes={sizes} patches={patches} />
                </div>
            </div>
            <div className={'relative mb-12 hidden md:block'}>
                <div className={'absolute -left-44'}>
                    <Image
                        priority
                        src="/icons/svg/rewards-badge.svg"
                        height={56}
                        width={159}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDescription;