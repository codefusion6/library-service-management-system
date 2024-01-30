'use client'
import { UserAuth } from "@/app/provider/context/AuthContext"
import { redirect } from "next/navigation";
import { useEffect } from "react"

export default function withAuth(Component) {

    return function WithAuth(props) {
        const { user } = UserAuth();
        useEffect(() => {
            if (!user) {
                redirect("/login")
            }
        }, [])

        if (!user) {
            return null
        }
        return <Component {...props} />
    }
}