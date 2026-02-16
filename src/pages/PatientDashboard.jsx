import { useEffect, useState } from "react"
import Sidebar from "../components/Sidebar"
import DashboardSection from "../components/patient/DashboardSection"
import VitalSignsSection from "../components/patient/VitalSignsSection"
import UpcomingTestsSection from "../components/patient/UpcomingTestsSection"
import MedicationsSection from "../components/patient/MedicationsSection"

function PatientDashboard() {
  const [patient, setPatient] = useState(null)
  const [activeTab, setActiveTab] = useState("dashboard")
  const [takenDates, setTakenDates] = useState([])

useEffect(() => {
  const fetchPatient = async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) return

    const res = await fetch(
      `https://medcare-server-qlok.onrender.com/api/patients/user/${user.id}`
    )
    const data = await res.json()
    setPatient(data)

    const logsRes = await fetch(
      `https://medcare-server-qlok.onrender.com/api/patients/${data.id}/medication-logs`
    )
    const logs = await logsRes.json()
    setTakenDates(logs)
  }

  fetchPatient()
}, [])


  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="ml-[20%] w-full p-6">
        {activeTab === "dashboard" && (
          <DashboardSection
  patient={patient}
  takenDates={takenDates}
/>
        )}

        {activeTab === "vitals" && (
          <VitalSignsSection vitals={patient?.vitals} />
        )}

        {activeTab === "tests" && (
          <UpcomingTestsSection tests={patient?.tests} />
        )}

        {activeTab === "medications" && (
          <MedicationsSection meds={patient?.medications} />
        )}
      </div>
    </div>
  )
}

export default PatientDashboard
