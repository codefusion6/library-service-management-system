// import NextThemeProvider from "../provider/NextThemeProvider";
import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
import "./../globals.css"

function dashboardLayout({ children }) {
  return (
    <>
      <div className='flex gap-2 md:flex-row flex-col'>
        <div className='w-full md:w-3/12 border-r bg-black text-white'>
          <Sidebar>
            <SidebarItems></SidebarItems>
          </Sidebar>
        </div>
        <div className='w-full md:w-9/12 bg-slate-500 p-4 md:p-10'>
          {children}
        </div>
      </div>
    </>
  )
}

export default dashboardLayout ;