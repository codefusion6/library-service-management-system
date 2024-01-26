
import Ourservices from '@/pages/ourservices/Ourservices';
import OurServicesBanner from '@/pages/ourservices/ourservicesbanner';
import React from 'react';

const page = () => {
        return (
                <div className=' bg-white h-[300vh] w-full mt-20 mb-10'>
                        <OurServicesBanner></OurServicesBanner>
                        <Ourservices></Ourservices>
                </div>
        );
};

export default page;