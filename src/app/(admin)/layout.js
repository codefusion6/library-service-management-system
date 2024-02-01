<<<<<<< HEAD

import Sidebar from "./dashboard/Sidebar";
import SidebarItems from "./dashboard/SidebarItems";
=======
import Sidebar from "./dashboard/Sidebar"
>>>>>>> afdd6ad131e408ed849897f605afd01cdd32d9d8
import "./../globals.css"

function dashboardLayout({ children }) {
  return (
    <>
      <div className='flex gap-2'>
        <Sidebar>
        </Sidebar>
<<<<<<< HEAD
        <div className="flex-1 h-[100vh] relative overflow-y-scroll top-0 p-3 md:p-5 lg:p-8">{children}
=======
        <div className="flex-1 h-[100vh] relative overflow-y-scroll top-0 p-3 md:p-5 lg:p-8">
          {children}
>>>>>>> afdd6ad131e408ed849897f605afd01cdd32d9d8
        </div>
      </div>
    </>
  )
}

export default dashboardLayout
