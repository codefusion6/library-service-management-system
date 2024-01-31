import { AuthContextProvider } from "../provider/context/AuthContext";
import MyNavbar from "@/shared/MyNavbar";
import Footer from "@/shared/Footer";
import "./../globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BookFlow",
  description: "Generated by create next app",
};

const Layout = ({ children }) => {
  return (
    <AuthContextProvider>
      <MyNavbar />
      {children}
      <Toaster position="top-right" />
      <Footer />
    </AuthContextProvider>
  );
};

export default Layout;
