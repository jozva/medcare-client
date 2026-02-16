import { useState } from "react"
import {
  deleteTest,
  updateTest
} from "../api/patientApi"

function UpcomingTestSection({ role, data = [], patientId, refresh }) {
  const [editingId, setEditingId] = useState(null)
  const [form, setForm] = useState({
    name: "",
    date: ""
  })

  const startEdit = (test) => {
    setEditingId(test.id)
    setForm({
      name: test.name,
      date: test.date
    })
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const saveEdit = async (testId) => {
    await updateTest(patientId, testId, form)
    setEditingId(null)
    refresh()
  }

  const handleDelete = async (testId) => {
    await deleteTest(patientId, testId)
    refresh()
  }

  return (
    <div className="bg-white rounded p-6 mt-8">
      <p className="text-2xl font-bold mb-4">Upcoming Tests</p>

      <table className="w-full text-left">
        <thead>
          <tr className="font-semibold">
            <th>#</th>
            <th>Test</th>
            <th>Date</th>
            {role === "doctor" && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.map((test, index) => (
            <tr key={test.id} className="border-t">
              <td>{index + 1}</td>

              <td>
                {editingId === test.id ? (
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  test.name
                )}
              </td>

              <td>
                {editingId === test.id ? (
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="border p-1"
                  />
                ) : (
                  test.date
                )}
              </td>

              {role === "doctor" && (
                <td className="flex gap-2">
                  {editingId === test.id ? (
                    <button
                      onClick={() => saveEdit(test.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded"
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      onClick={() => startEdit(test)}
                      className="bg-yellow-400 px-3 py-1 rounded"
                    >
                      Edit
                    </button>
                  )}

                  <button
                    onClick={() => handleDelete(test.id)}
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

export default UpcomingTestSection
