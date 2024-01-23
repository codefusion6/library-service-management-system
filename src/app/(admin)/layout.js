import NextThemeProvider from "../provider/NextThemeProvider";

const Layout = ({ children }) => {
  return (
        <main>
          <NextThemeProvider>
            {children}
          </NextThemeProvider>
        </main>
  );
};

export default Layout;
