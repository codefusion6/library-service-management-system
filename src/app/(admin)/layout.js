// import NextThemeProvider from "../provider/NextThemeProvider";
import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
function dashboardLayout({ children }) {
  return (
    <>
      <div className="flex gap-2 md:flex-row flex-col relative">
        <div className="w-full min-h-screen md:w-3/12 border-r text-white fixed z-10 top-0 left-0 overflow-x-hidden overflow-scroll">
          <Sidebar>
            <SidebarItems></SidebarItems>
          </Sidebar>
        </div>
        <div className="w-full md:w-9/12 bg-white p-4 md:p-10 ml-[358px]">
          {children}
        </div>
      </div>
    </>
  );
}

export default dashboardLayout;
