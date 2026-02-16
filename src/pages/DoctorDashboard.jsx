import { useEffect, useState } from "react"
import { getPatients } from "../api/patientApi"
import PatientCard from "../components/PatientCard"

function DoctorDashboard() {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        const fetchPatients = async () => {
            const data = await getPatients()
            setPatients(data)
        }

        fetchPatients()
    }, [])

    return (
        <div>
            <h2 className="text-3xl font-bold mb-8">Doctor Dashboard</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {patients.map((p) => (
                    <PatientCard key={p.id} patient={p} />
                ))}
            </div>
        </div>
    )
}

export default DoctorDashboard
