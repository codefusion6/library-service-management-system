import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
import "./../globals.css"

function dashboardLayout({ children }) {
  return (
    <>
      <div className='flex gap-2'>
        <Sidebar>
          <SidebarItems ></SidebarItems>
        </Sidebar>
        <div className="flex-1">{children}</div>
      </div>
    </>
  )
}

export default dashboardLayout
