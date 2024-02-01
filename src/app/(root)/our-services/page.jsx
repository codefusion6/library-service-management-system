import Ourservices from '@/pages/ourservices/Ourservices';
import OurServicesBanner from '@/pages/ourservices/ourservicesbanner';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-white lg:mt-10 lg:min-h-screen'>
            <OurServicesBanner />
            <div className="mx-auto max-w-6xl px-4">
                <Ourservices />
            </div>
        </div>
    );
};

export default Page;
