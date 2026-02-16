import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import MedicationSection from "../components/MedicationSection"
import UpcomingTestSection from "../components/UpcomingTestSection"
import MedicineCalendar from "../components/MedicineCalendar"
import EditVitals from "../components/EditVitals"
import AddMedication from "../components/AddMedication"
import { getPatientById } from "../api/patientApi"
import AddTest from "../components/AddTest"

function DoctorPatientDetails() {
  const { id } = useParams()
  const [patient, setPatient] = useState(null)
  const [takenDates, setTakenDates] = useState([])

  const fetchPatient = async () => {
    const data = await getPatientById(id)
    setPatient(data)

    const res = await fetch(
      `https://medcare-server-qlok.onrender.com/api/patients/${id}/medication-logs`
    )
    const logs = await res.json()
    setTakenDates(logs)
  }

  useEffect(() => {
    fetchPatient()
  }, [id])

  if (!patient) return <p>Loading...</p>

  return (
    <div className="ml-[20%] p-6">
      <h2 className="text-3xl font-bold mb-6">
        {patient.name} - Patient Details
      </h2>

      <div className="bg-white p-6 rounded shadow mb-8">
        <h3 className="text-xl font-bold mb-4">Basic Info</h3>
        <p>Age: {patient.age}</p>
        <p>Gender: {patient.gender}</p>
        <p>Blood Group: {patient.blood}</p>
        <p>Contact: {patient.contact}</p>
      </div>

      <EditVitals patient={patient} refresh={fetchPatient} />

      <AddMedication
        patientId={patient.id}
        refresh={fetchPatient}
      />

      <MedicationSection
        role="doctor"
        data={patient.medications || []}
        patientId={patient.id}
        refresh={fetchPatient}
      />

      <UpcomingTestSection
        role="doctor"
        data={patient.tests || []}
        patientId={patient.id}
        refresh={fetchPatient}
      />

      <AddTest
        patientId={patient.id}
        refresh={fetchPatient}
      />

      <div className="bg-white p-6 rounded shadow mt-8">
        <h3 className="text-xl font-bold mb-4 text-center">
          Medicine Tracker
        </h3>

        <MedicineCalendar takenDates={takenDates} />
      </div>
    </div>
  )
}

export default DoctorPatientDetails
