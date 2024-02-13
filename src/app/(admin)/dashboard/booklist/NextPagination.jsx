"use client"
import React from "react";
import { Pagination, Button } from "@nextui-org/react";
import Link from "next/link";

export default function NextPagination({ totalPage }) {
    const [currentPage, setCurrentPage] = React.useState(1);

    return (
        <div className="flex flex-col gap-5">
            <p className="text-small text-default-500">Selected Page: {currentPage}</p>
                <Pagination
                    total={totalPage}
                    color="secondary"
                    page={currentPage}
                    onChange={setCurrentPage}
                />
            
            <div className="flex gap-2">
                <Link className="" href={`?page=${currentPage > 1 ? currentPage - 1 : currentPage}`}>
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
                    >
                        Previous
                    </Button>
                </Link>
                <Link href={`?page=${currentPage === totalPage ? totalPage : currentPage + 1}`} >
                    <Button
                        size="sm"
                        variant="flat"
                        color="secondary"
                        onPress={() => setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))}
                    >
                        Next
                    </Button>
                </Link>
            </div>
        </div>
    );
}
