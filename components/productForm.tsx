"use client"

import React from 'react';
import Image from "next/image";
import Input from "@/components/input";
import Select from "@/components/select";

type ProductFormProps={
    sizes:string[],
    patches:string[]
}
const ProductForm = ({sizes,patches}:ProductFormProps) => {
    return (
        <form className={'w-full flex flex-col space-y-10'}>
            <div className={'flex flex-col space-y-3'}>
                <LabelAndFormItem label={"Size"} required>
                    <div className={'w-full h-full flex items-center gap-2'}>
                        <Select options={sizes} placeholder={'Select a shirt size'} />
                        <button className={'bg-effect-footer-gray text-effect-black h-full px-2 md:px-3 whitespace-nowrap text-[8px]  md:text-xs font-medium'}><span className={'hidden md:inline'}>View</span> Size Chart</button>
                    </div>
                </LabelAndFormItem>
                <LabelAndFormItem label={"Name"}>
                    <Input placeholder={'What name would you want in the shirt?'} />
                </LabelAndFormItem>
                <LabelAndFormItem label={"Number on Shirt"}>
                    <Input placeholder={'Enter a number between 0 and 99'} />

                </LabelAndFormItem>
                <LabelAndFormItem label={"Patch"}>
                    <Select options={patches} placeholder={'Select a patch'} />

                </LabelAndFormItem>
                <LabelAndFormItem label={"Quantity"}>
                    <div className={'w-20 h-full'}>
                        <Input type={'number'}/>
                    </div>
                </LabelAndFormItem>
            </div>

            <button className={'w-full h-14 bg-effect-yellow text text-effect-black flex items-center'}>
                <span className={'flex-1 text-left px-6 font-medium'}>Add to Card</span>
                <div className={'w-14 h-14 bg-effect-black grid place-items-center'}>
                    <Image
                        priority
                        className={'invert'}
                        src="/icons/svg/shopping-cart.svg"
                        height={20}
                        width={20}
                        alt=""
                    />
                </div>
            </button>
        </form>
    );
};

export default ProductForm;

interface LabelAndFormItemProps extends React.PropsWithChildren{
    label:string,
    required?:boolean
}
const LabelAndFormItem=({label,required,children}:LabelAndFormItemProps)=>{
    return (
        <div className={'flex items-center gap-3'}>
            <label className={'w-20 md:w-32 text-xs text-effect-black font-medium'}><span>{label}</span><span className={'text-effect-red'}>{required?'*':''}</span></label>
            <div className={'flex-1 h-10'}>
                {children}
            </div>
        </div>
    );
}