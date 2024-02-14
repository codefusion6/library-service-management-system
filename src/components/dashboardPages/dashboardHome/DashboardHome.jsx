'use client'
import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import { FaBookOpen, FaSearch, FaUserFriends } from 'react-icons/fa'
import { FaBookBible } from 'react-icons/fa6'
import { IoIosNotifications } from 'react-icons/io'

const DashboardHome = ({bookNum, userNum, writerNum}) => {
    return (

        <div className="">
            <div className="flex justify-end items-center gap-3 bg-gradient-to-r from-yellow-200 to-green-600 p-5">
                <input
                    type="text"
                    placeholder="search a book"
                    className="rounded-lg py-2 px-3"
                />
                <FaSearch className="text-2xl"></FaSearch>
                <IoIosNotifications className="text-3xl" />
            </div>
            <div className="pt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                <Card className="max-w-[400px] border bg-green-900 p-5 text-white rounded-lg">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-bold font-semibold">Total User</p>
                            <p className="text-xl font-semibold flex gap-3 ">
                                <FaUserFriends className="text-3xl" />
                                {userNum}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>

                        </p>
                    </CardBody>
                </Card>
                <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-bold text-xl font-semibold"> Total Books</p>
                            <p className="text-xl font-semibold flex gap-3 ">
                                <FaBookOpen className="text-3xl" />
                                {bookNum}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>

                        </p>
                    </CardBody>
                </Card>
                <Card className="max-w-[400px] border bg-green-500 p-5 text-white rounded-lg">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-bold font-semibold">Total Writers</p>
                            <p className="text-xl font-semibold flex gap-3  ">
                                <FaBookBible className="text-3xl" />
                                {writerNum}
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>

                        </p>
                    </CardBody>
                </Card>
                <Card className="max-w-[400px] border bg-green-700 p-5 text-white rounded-lg">
                    <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                            <p className="text-bold text-xl font-semibold">Recomandded books</p>
                            <p className="text-xl font-semibold flex gap-3 ">
                                <FaBookOpen className="text-3xl" />
                                8
                            </p>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <p>

                        </p>
                    </CardBody>
                </Card>
            </div>

        </div>
    )
}

export default DashboardHome;