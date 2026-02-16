import { useState } from "react"
import { updateVitals } from "../api/patientApi"

function EditVitals({ patient, refresh }) {
  const [form, setForm] = useState({
    bloodSugar: "",
    bloodPressure: "",
    heartRate: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await updateVitals(patient.id, form)

    setForm({
      bloodSugar: "",
      bloodPressure: "",
      heartRate: ""
    })

    refresh()
  }

    return (
        <div>
            <div className="bg-white p-6 rounded shadow mb-8">
                <h3 className="text-xl font-bold mb-4">Vitals</h3>

                <div className="grid grid-cols-3 gap-4">
                    <p>
                        <strong>Blood Sugar:</strong>{" "}
                        {patient.vitals?.blood_sugar || "-"}
                    </p>

                    <p>
                        <strong>Blood Pressure:</strong>{" "}
                        {patient.vitals?.blood_pressure || "-"}
                    </p>

                    <p>
                        <strong>Heart Rate:</strong>{" "}
                        {patient.vitals?.heart_rate || "-"}
                    </p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-8">
                <h3 className="text-xl font-bold mb-4">Edit Vitals</h3>

                <div className="grid grid-cols-3 gap-4">
                    <input
                        name="bloodSugar"
                        value={form.bloodSugar}
                        onChange={handleChange}
                        className="border p-2"
                        placeholder="Blood Sugar"
                    />
                    <input
                        name="bloodPressure"
                        value={form.bloodPressure}
                        onChange={handleChange}
                        className="border p-2"
                        placeholder="Blood Pressure"
                    />
                    <input
                        name="heartRate"
                        value={form.heartRate}
                        onChange={handleChange}
                        className="border p-2"
                        placeholder="Heart Rate"
                    />
                </div>

                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Save Vitals
                </button>
            </form>
        </div>

    )
}

export default EditVitals
