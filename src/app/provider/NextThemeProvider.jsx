// app/providers.tsx
"use client";
import React from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";

function NextThemeProvider({ children }) {
    return (
        <NextUIProvider>
            <NextThemesProvider attribute="class" defaultTheme="light">
                {children}
            </NextThemesProvider>
        </NextUIProvider>
    )
}

export default NextThemeProvider