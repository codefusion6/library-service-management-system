import { Merriweather } from "next/font/google";
import "./globals.css";
import { AuthContextProvider } from "./provider/context/AuthContext";
import { Toaster } from "react-hot-toast";

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
        <body className={`${merriweather.className}`}>
          {children}
          <Toaster position="top-right" />
        </body>
      </AuthContextProvider>
    </html>
  );
};

export default RootLayout;
