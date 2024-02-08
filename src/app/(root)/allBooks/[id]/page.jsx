import { Button, Image } from '@nextui-org/react';
import React from 'react'
import Link from "next/link";
import { FaStar } from 'react-icons/fa6';
import { getBook } from '@/libs/actions/book.action';

const page = async ({ params }) => {
    const singleBook = await getBook(params.id);
    return (
        <main className='min-h-screen pt-32'>
            <div className='container mx-auto'>
                <div>
                    <div className="w-full  flex flex-col md:flex-row md:w-2/3 mx-auto bg-white shadow-lg rounded-lg border hover:border-green-500 hover:border-2">
                        <div className="w-full  md:max-w-[300px] p-2">
                            <Image
                                src={singleBook.bookCover}
                                alt="Card Image"
                                width={270}
                                height={270}
                                style={{ opacity: "1" }}
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                        <div className="flex-1 p-2">
                            <p className="text-lg uppercase font-bold">{singleBook.bookName}</p>
                            <span>By</span>
                            <h4 className="font-bold text-large">{singleBook.authorName}</h4>
                            <p className="text-base font-medium">
                                Price: <span className="font-bold">{singleBook.category}</span>
                            </p>
                            <p className="text-yellow-500 flex">
                                <FaStar></FaStar>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </p>
                            <div className="flex my-5 gap-x-3">
                                <Button
                                    variant="ghost"
                                    className="hover:bg-gradient-to-r border from-yellow-200 to-green-600  hover:text-white text-black font-bold py-2 px-4 rounded"
                                    size="lg"
                                >
                                    Buy
                                </Button>
                                <Link href={`/allBooks/${singleBook._id}/view-pdf`} target="_blank" className="hover:bg-gradient-to-r from-yellow-200 to-green-600  hover:text-white text-black font-bold py-2 px-4 rounded border">
                                    <Button>
                                        View Pdf
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default page