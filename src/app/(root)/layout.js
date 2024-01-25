import { Merriweather } from "next/font/google";
import { AuthContextProvider } from "../provider/context/AuthContext";
import { Providers } from "../provider/Providers";
import MyNavbar from "@/shared/MyNavbar";
import Footer from "@/shared/Footer";
import "./../globals.css";

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
    <AuthContextProvider>
      <Providers>
        <MyNavbar></MyNavbar>
        {children}
        <Footer/>
      </Providers>
    </AuthContextProvider>
  );
};

export default RootLayout;
