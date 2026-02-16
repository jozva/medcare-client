import MedicineCalendar from "../MedicineCalendar"
import { useEffect, useState } from "react"

function DashboardSection({ patient }) {
    const [takenDates, setTakenDates] = useState([])

    useEffect(() => {
        const fetchLogs = async () => {
            if (!patient?.id) return

            const res = await fetch(
                `https://medcare-server-qlok.onrender.com/api/patients/${patient.id}/medication-logs`
            )
            const data = await res.json()
            setTakenDates(data)
        }

        fetchLogs()
    }, [patient])

    if (!patient) return null

    const today = new Date().toISOString().split("T")[0]
    const alreadyTaken = takenDates.includes(today)

    const handleTakeToday = async () => {
        await fetch(
            `https://medcare-server-qlok.onrender.com/api/patients/${patient.id}/take-medication`,
            { method: "POST" }
        )

        setTakenDates((prev) => [...prev, today])
    }

    return (
        <div className="space-y-6">

            <div className="bg-white p-6 rounded shadow">
                <p className="text-xl font-bold mb-4">Patient Info</p>

                <div className="space-y-2">
                    <p><b>Name:</b> {patient.name}</p>
                    <p><b>Age:</b> {patient.age}</p>
                    <p><b>Gender:</b> {patient.gender}</p>
                    <p><b>Blood Group:</b> {patient.blood}</p>
                    <p><b>Contact:</b> {patient.contact}</p>
                    <p><b>Height:</b> {patient.height}</p>
                    <p><b>Weight:</b> {patient.weight}</p>
                    <p><b>BMI:</b> {patient.bmi}</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded shadow">
                <p className="text-xl font-bold mb-4 text-center">
                    Medicine Tracker
                </p>

                <MedicineCalendar
                    patientId={patient.id}
                    takenDates={takenDates}
                />

                <div className="mt-4">
                    {alreadyTaken ? (
                        <button className="bg-gray-400 text-white px-5 py-2 rounded">
                            Already Taken Today
                        </button>
                    ) : (
                        <button
                            onClick={handleTakeToday}
                            className="bg-green-600 text-white px-5 py-2 rounded"
                        >
                            Take Medication Today
                        </button>
                    )}
                </div>
            </div>

        </div>
    )
}

export default DashboardSection
