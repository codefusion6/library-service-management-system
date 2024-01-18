import { Inter } from 'next/font/google'
import * as React from "react";
import './globals.css'
import favicon from '../../public/images/favicon.png'
import Head from 'next/head';
import './globals.css';
import Navbar from '@/components/Home/Navbar';
import Footer from '@/components/Home/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'BookFlow',
  description: 'Generated by create next app',
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <link rel="shortcut icon" href={favicon} />
        <title>{metadata.title}</title>
      </Head>

      <body className={inter.className}>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  );
};

export default RootLayout;
