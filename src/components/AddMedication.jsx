import { useState } from "react"
import { addMedication } from "../api/patientApi"

function AddMedication({ patientId, refresh }) {
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    times: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

const handleSubmit = async (e) => {
  e.preventDefault()

  const med = {
    name: form.name,
    dosage: form.dosage,
    times: form.times.split(",")
  }

  await addMedication(patientId, med)

  setForm({
    name: "",
    dosage: "",
    times: ""
  })

  refresh()
}


  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mt-8">
      <h3 className="text-xl font-bold mb-4">Add Medication</h3>

      <div className="grid grid-cols-3 gap-4">
        <input
          name="name"
          placeholder="Medicine Name"
          onChange={handleChange}
          value={form.name}
          className="border p-2"
        />
        <input
          name="dosage"
          placeholder="Dosage"
          onChange={handleChange}
          value={form.dosage}
          className="border p-2"
        />
        <input
          name="times"
          placeholder="Times (Morning,Night)"
          onChange={handleChange}
          value={form.times}
          className="border p-2"
        />
      </div>

      <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
        Add Medication
      </button>
    </form>
  )
}

export default AddMedication
