"use client"
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState } from 'react'

export function Providers({ children }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools></ReactQueryDevtools>
            <NextUIProvider attribute="class" defaultTheme="dark">
                {children}
            </NextUIProvider>
        </QueryClientProvider>
    )
}

export default Providers