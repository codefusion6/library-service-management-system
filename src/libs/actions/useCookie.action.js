'use server'
import { cookies } from 'next/headers'

export async function createCookie() {
    cookies().set("user", "userExist")
}

export async function deleteCookie() {
    cookies().delete("user")
}