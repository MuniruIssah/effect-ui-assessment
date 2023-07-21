import React from 'react';
import Link from "next/link";

type BreadcrumbProps={
    category:string,
    item:string
}
const Breadcrumb = ({category,item}:BreadcrumbProps) => {
    return (
        <div className={'text-[10px] flex gap-2 font-light text-effect-black'}>
            <Link href={'/'}><span className={'text-effect-blue'}>Home</span></Link>
            <span>{'>'}</span>
            <span  className={'text-effect-blue'}>{category}</span>
            <span>{'>'}</span>
            <span>{item}</span>
        </div>
    );
};

export default Breadcrumb;