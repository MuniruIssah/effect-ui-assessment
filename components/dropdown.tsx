import React from 'react';
import Image from "next/image";

const Dropdown = ({active}:{active:string}) => {
    return (
        <div className={'flex space-x-2 items-center'}>
            <span className={'text-xs'}>{active}</span>
            <Image
                priority
                src="/icons/svg/down.svg"
                className={'invert'}
                height={5}
                width={8}
                alt="Language"
            />
        </div>
    );
};

export default Dropdown;