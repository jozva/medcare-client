import { useNavigate } from "react-router-dom"

function Sidebar({ activeTab, setActiveTab }) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("user"))
  const role = user?.role

  return (
    <section className="fixed top-20 left-0 w-1/5 h-[calc(100vh-80px)] bg-[#f0fbf8] flex flex-col justify-center">
      <ul className="flex flex-col items-center gap-5 w-full">

        {role === "doctor" && (
          <>
            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => navigate("/doctor")}
            >
              Dashboard
            </li>

            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => navigate("/doctor/add-patient")}
            >
              Add Patient
            </li>
          </>
        )}

        {role === "patient" && (
          <>
            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </li>

            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => setActiveTab("vitals")}
            >
              Vital Signs
            </li>

            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => setActiveTab("tests")}
            >
              Upcoming Tests
            </li>

            <li
              className="p-3 w-full text-center cursor-pointer font-bold hover:bg-white"
              onClick={() => setActiveTab("medications")}
            >
              Medications
            </li>
          </>
        )}

      </ul>
    </section>
  )
}

export default Sidebar
