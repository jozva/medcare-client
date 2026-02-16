import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
import { useState } from "react"

function PatientLayout() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <div>
      <Navbar />

      <div className="flex">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="ml-[20%] w-[80%] p-6 mt-20">
          <Outlet context={{ activeTab, setActiveTab }} />
        </div>
      </div>
    </div>
  )
}

export default PatientLayout
