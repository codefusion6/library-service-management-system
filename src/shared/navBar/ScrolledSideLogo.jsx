import { Link } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import scrolledSiteLogo from "../../../public/logo-no-background.png"

const ScrolledSideLogo = () => {
    return (
        <Link href="/">
        <Image
            className="max-w-[100px] md:max-w-[200px]"
            src={scrolledSiteLogo}
            alt="our logo"
            width={200}
            height={100}
        />
    </Link>
    );
};

export default ScrolledSideLogo;