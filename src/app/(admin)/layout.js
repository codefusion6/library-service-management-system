<<<<<<< HEAD
<<<<<<< HEAD
import NextThemeProvider from "../provider/NextThemeProvider";
=======
// import NextThemeProvider from "../provider/NextThemeProvider";
>>>>>>> d4b6d54453be1dd326f4d0a30ed314b80a574873
import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
import "./../globals.css"

function dashboardLayout({ children }) {
=======
import '../globals.css'
const Layout = ({ children }) => {
>>>>>>> 44506a02f3309ec0198e64fd6a6759defe761a27
  return (
    <>
      <div className='flex gap-2 md:flex-row flex-col'>
        <div className='w-full md:w-3/12 border-r bg-black text-white'>
          <Sidebar>
            <SidebarItems></SidebarItems>
          </Sidebar>
        </div>
        <div className='w-full md:w-9/12 bg-slate-500 p-4 md:p-10 min-h-screen'>
          {children}
        </div>
      </div>
    </>
  )
}

export default dashboardLayout