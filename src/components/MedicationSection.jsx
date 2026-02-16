import { useState } from "react"
import {
  deleteMedication,
  updateMedication
} from "../api/patientApi"

function MedicationSection({ role, data = [], patientId, refresh }) {
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({
    name: "",
    dosage: "",
    times: ""
  })

  const startEdit = (med) => {
    setEditingId(med.id)
    setForm({
      name: med.name,
      dosage: med.dosage,
      times: med.times.join(", ")
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const saveEdit = async (medId) => {
    await updateMedication(patientId, medId, {
      name: form.name,
      dosage: form.dosage,
      times: form.times.split(",")
    })

    setEditingId(null)
    refresh()
  }

  const handleDelete = async (medId) => {
    await deleteMedication(patientId, medId)
    refresh()
  }

  return (
    <div className="bg-white rounded p-6 mt-8">
      <p className="text-2xl font-bold mb-4">Medication List</p>

      <table className="w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th>#</th>
            <th>Medication</th>
            <th>Time</th>
            <th>Dosage</th>
            {role === "doctor" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((m, index) => (
            <tr key={m.id} className="border-t">
              <td>{index + 1}</td>

              <td>
                {editingId === m.id ? (
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  m.name
                )}
              </td>

              <td>
                {editingId === m.id ? (
                  <input
                    name="times"
                    value={form.times}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  m.times.join(" | ")
                )}
              </td>

              <td>
                {editingId === m.id ? (
                  <input
                    name="dosage"
                    value={form.dosage}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  m.dosage
                )}
              </td>

              {role === "doctor" && (
                <td className="flex gap-2">
                  {editingId === m.id ? (
                    <button
                      onClick={() => saveEdit(m.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(m)}
                      className="bg-yellow-400 px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(m.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MedicationSection
