// Import necessary libraries
import React from 'react';
import Slider from 'react-slick';
import { FaBook, FaSearch, FaChalkboardTeacher, FaUsers, FaWifi, FaCoffee } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Your component code
const LibraryServicesSection = () => {
    const servicesData = [
        {
            icon: <FaUsers className="text-3xl mb-4" />,
            title: "Community Events",
            description: "Participate in community events and book clubs. Connect with fellow readers, authors, and engage in discussions about your favorite books."
        },
        {
            icon: <FaWifi className="text-3xl mb-4" />,
            title: "Free Wi-Fi",
            description: "Stay connected while you read! Enjoy free Wi-Fi in our library spaces, allowing you to access online resources and stay productive."
        },
        {
            icon: <FaCoffee className="text-3xl mb-4" />,
            title: "Cozy Cafe",
            description: "Visit our cozy cafe for a delightful reading break. Enjoy a cup of coffee or tea while immersing yourself in your favorite book."
        },
        {
            icon: <FaBook className="text-3xl mb-4" />,
            title: "Book Borrowing",
            description: "Explore our extensive collection of books covering various genres. Borrow books for a specified period and enjoy reading at your own pace."
        },
        {
            icon: <FaSearch className="text-3xl mb-4" />,
            title: "Online Catalog",
            description: "Access our online catalog to search for books, check availability, and place holds. Our user-friendly catalog makes it easy to discover and reserve your favorite titles."
        },
        {
            icon: <FaChalkboardTeacher className="text-3xl mb-4" />,
            title: "Reading Spaces",
            description: "Enjoy a quiet and comfortable reading environment in our dedicated reading spaces. Whether you need a focused study area or a cozy spot for leisure reading, we have you covered."
        },
        
        // Add more services as needed
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Library Services</h2>

                <Slider {...sliderSettings}>
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-center">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                            <p className="text-gray-600">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default LibraryServicesSection;
