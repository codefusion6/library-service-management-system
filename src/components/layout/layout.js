import NextThemeProvider from "@/app/provider/NextThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const Layout = () => {
  return (
    <NextUIProvider>
      <NextThemeProvider>
        
      </NextThemeProvider>
    </NextUIProvider>
  );
};
