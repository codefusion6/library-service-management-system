import { Merriweather } from 'next/font/google'
import * as React from "react";
import Footer from "@/shared/Footer";
import MyNavbar from "@/shared/MyNavbar";
import { Toaster } from "react-hot-toast";
import "./../globals.css";
import { Providers } from "../provider/Providers";
import { AuthContextProvider } from "../provider/context/AuthContext";

const merriweather = Merriweather({
  subsets: ['latin'],
  weight: ['400', '300', '700', '900']
});

export const metadata = {
  title: 'BookFlow',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <AuthContextProvider>
        <body className={merriweather.className}>
          <Providers>
            <MyNavbar></MyNavbar>
            {children}
            <Toaster position="top-right" />
            <Footer />
          </Providers>
        </body>
      </AuthContextProvider>
    </html >
  );
};

export default RootLayout;