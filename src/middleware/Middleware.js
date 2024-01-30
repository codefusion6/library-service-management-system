import { UserAuth } from '@/app/provider/context/AuthContext'
import React from 'react'

const { user } = UserAuth()

export default user((req) => {
    // req.auth
    //logic
    console.log("Middleware called")

})

export const config = {
    matcher: ["/dashboard"]
}