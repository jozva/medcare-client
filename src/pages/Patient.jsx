import { useEffect, useState } from "react"
import PatientCard from "../components/PatientCard"
import { getPatients } from "../api/patientApi"

function Patients() {
    const [patients, setPatients] = useState([])

    useEffect(() => {
        const fetchPatients = async () => {
            const data = await getPatients()
            setPatients(data)
        }

        fetchPatients()
    }, [])

    return (
        <section className="flex flex-wrap">
            {patients.map((p) => (
                <PatientCard key={p.id} patient={p} />
            ))}
        </section>
    )
}

export default Patients
