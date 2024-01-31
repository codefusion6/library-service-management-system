"use client"
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {
    return (
        <NextUIProvider attribute="class" defaultTheme="dark">
            {children}
        </NextUIProvider>
    )
}