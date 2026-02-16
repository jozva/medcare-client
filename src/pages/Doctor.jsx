import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"

function Doctor() {
  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar />

        <div className="ml-[20%] w-[80%] p-6 mt-20">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Doctor
