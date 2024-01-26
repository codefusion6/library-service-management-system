import NextThemeProvider from "@/app/provider/NextThemeProvider";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

export const Layout = () => {
  return (
    <NextUIProvider>
<<<<<<< HEAD
      <NextThemeProvider>
        
      </NextThemeProvider>
=======
      <NextThemeProvider
        defaultTheme="system"
        attribute="class"
        {...themeProps}
      ></NextThemeProvider>
      
>>>>>>> 43c41c7ce737b18f87b2b29540cf1a41e356ebfc
    </NextUIProvider>
  );
};
