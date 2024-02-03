import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export async function middleware(request) {
    const cookieStore = cookies();
    const user = cookieStore.get('user')

    if (!user) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: ['/dashboard'],
}


