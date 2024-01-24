import React from 'react'
import NextThemeProvider from "@/app/provider/NextThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import { Layout } from '@/components/layout/layout';
export const Providers = ({ children, themeProps }) => {
    return (
        <NextUIProvider>
            <NextThemeProvider
                defaultTheme="system"
                attribute="class"
                {...themeProps}
            ></NextThemeProvider>
            <Layout>
                {children}
            </Layout>
        </NextUIProvider>
    )
}
