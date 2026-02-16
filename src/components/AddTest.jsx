import { useState } from "react"
import { addTest } from "../api/patientApi"

function AddTest({ patientId, refresh }) {
  const [form, setForm] = useState({
    name: "",
    date: ""
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    await addTest(patientId, form)

    setForm({
      name: "",
      date: ""
    })

    refresh()
  }

  return (
    <form className="bg-white p-6 rounded shadow mt-8" onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold mb-4">Add Upcoming Test</h3>

      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Test Name"
          className="border p-2"
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border p-2"
        />
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Add Test
      </button>
    </form>
  )
}

export default AddTest
