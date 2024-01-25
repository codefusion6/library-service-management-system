// import NextThemeProvider from "../provider/NextThemeProvider";
import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
function dashboardLayout({ children }) {
  return (
    <>
      <div className='flex gap-2 md:flex-row flex-col'>
        <div className='w-full min-h-screen md:w-3/12 border-r  text-white'>
          <Sidebar>
            <SidebarItems></SidebarItems>
          </Sidebar>
        </div>
        <div className="w-full md:w-9/12 bg-white p-4 md:p-10 min-h-screen">
          {children}
        </div>
      </div>
      <div className="w-9/12 bg-slate-500">{children}</div>
    </>
  );
}

export default dashboardLayout;
