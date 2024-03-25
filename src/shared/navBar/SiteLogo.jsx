import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import siteLogo from '../../../public/images/bookflow1.png'

const SiteLogo = () => {
    return (
        <Link href="/">
            <Image
                className="max-w-[100px] md:max-w-[200px]"
                src={siteLogo}
                alt="our logo"
                width={200}
                height={100}
            />
        </Link>
    )
}

export default SiteLogo