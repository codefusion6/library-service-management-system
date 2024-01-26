"use client"

import React from 'react';

const LibraryServicesSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Library Services</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Service 1: Book Borrowing */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Book Borrowing</h3>
                        <p className="text-gray-600">
                            Explore our extensive collection of books covering various genres. Borrow books for a specified period and enjoy reading at your own pace.
                        </p>
                    </div>

                    {/* Service 2: Online Catalog */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Online Catalog</h3>
                        <p className="text-gray-600">
                            Access our online catalog to search for books, check availability, and place holds. Our user-friendly catalog makes it easy to discover and reserve your favorite titles.
                        </p>
                    </div>

                    {/* Service 3: Reading Spaces */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Reading Spaces</h3>
                        <p className="text-gray-600">
                            Enjoy a quiet and comfortable reading environment in our dedicated reading spaces. Whether you need a focused study area or a cozy spot for leisure reading, we have you covered.
                        </p>
                    </div>

                    {/* Add more services as needed */}
                </div>
            </div>
        </section>
    );
};

export default LibraryServicesSection;
