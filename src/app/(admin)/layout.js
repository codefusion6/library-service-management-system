
import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
import "./../globals.css"

function dashboardLayout({ children }) {
  return (
    <>
      <div className='flex gap-2'>
        <Sidebar></Sidebar>
        <div className="flex-1 h-[100vh] relative overflow-y-scroll top-0 p-3 md:p-5 lg:p-8">
          {children}
        </div>
      </div>
    </>
  )
}
export default dashboardLayout
