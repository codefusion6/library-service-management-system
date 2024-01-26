"use client"

import React from 'react';

const PricingSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Pricing</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Pricing Option 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Membership</h3>
                        <p className="text-gray-600 mb-4">Access to our standard book collection</p>
                        <p className="text-2xl font-bold text-indigo-600">$9.99/month</p>
                        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full">Subscribe</button>
                    </div>

                    {/* Pricing Option 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Membership</h3>
                        <p className="text-gray-600 mb-4">Access to premium book collection + Online catalog benefits</p>
                        <p className="text-2xl font-bold text-indigo-600">$19.99/month</p>
                        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full">Subscribe</button>
                    </div>

                    {/* Pricing Option 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Library Pass</h3>
                        <p className="text-gray-600 mb-4">Unlimited book borrowing + All online services</p>
                        <p className="text-2xl font-bold text-indigo-600">$29.99/month</p>
                        <button className="mt-4 bg-indigo-600 text-white py-2 px-4 rounded-full">Subscribe</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
