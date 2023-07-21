import React from 'react';
import Image from "next/image";
import {BiMenu} from "react-icons/bi";

const MobileHeader = () => {
    return (
        <div className={'h-20 md:hidden flex items-center justify-between px-3 bg-effect-footer-gray '}>
            <div className={'flex items-center space-x-10'}>
                <BiMenu size={32} />
                <Image
                    priority
                    src="/icons/svg/search.svg"
                    className={'invert'}

                    height={24}
                    width={24}
                    alt="search"
                />
            </div>
            <div className={'flex items-center space-x-10'}>
                <Image
                    priority
                    src="/icons/svg/shopping-cart.svg"
                    height={24}
                    width={24}
                    alt="cart"
                />
                <div className={'flex items-center space-x-1'}>
                    <Image
                        priority
                        src="/icons/svg/user.svg"
                        height={24}
                        width={24}
                        alt="user"
                    />
                    <Image
                        priority
                        src="/icons/svg/down.svg"
                        height={7}
                        width={7}
                        alt="user"
                    />
                </div>
            </div>
        </div>
    );
};

export default MobileHeader;