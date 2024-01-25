import { Merriweather } from "next/font/google";
import * as React from "react";
import "./globals.css";
import Footer from "@/shared/Footer";
import { AuthContextProvider } from "./provider/context/AuthContext";
import MyNavbar from "@/shared/MyNavbar";
import { Toaster } from "react-hot-toast";
import { NextUIProvider } from "@nextui-org/react";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "300", "700", "900"],
});

export const metadata = {
  title: "BookFlow",
  description: "Generated by create next app",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AuthContextProvider>
        <body className={merriweather.className}>
          {/* <NextThemeProvider> */}
          {/* <NextUIProvider> */}
            {children}
            <Toaster position="top-right" />
          {/* </NextUIProvider> */}
          {/* </NextThemeProvider> */}
        </body>
      </AuthContextProvider>
    </html>
  );
};

export default RootLayout;
