import { useState } from "react"
import { addPatient } from "../api/patientApi"
import { useNavigate } from "react-router-dom"

function AddPatient() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        age: "",
        gender: "",
        blood: "",
        contact: "",
        height: "",
        weight: "",
        bmi: "",
        bloodSugar: "",
        bloodPressure: "",
        heartRate: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        let updatedForm = { ...form, [name]: value }

        if (name === "height" || name === "weight") {
            const height = name === "height" ? value : form.height
            const weight = name === "weight" ? value : form.weight

            if (height && weight) {
                const h = height / 100 
                const bmi = (weight / (h * h)).toFixed(1)
                updatedForm.bmi = bmi
            }
        }

        setForm(updatedForm)
    }


    const handleSubmit = async (e) => {
        e.preventDefault()

        const patientData = {
            name: form.name,
            age: form.age,
            gender: form.gender,
            blood: form.blood,
            contact: form.contact,
            height: form.height,
            weight: form.weight,
            bmi: form.bmi,
            vitals: {
                bloodSugar: form.bloodSugar,
                bloodPressure: form.bloodPressure,
                heartRate: form.heartRate
            }
        }


        await addPatient(patientData)

        alert("Patient added successfully")

        navigate("/doctor")
    }

    return (
        <div className="max-w-3xl mx-auto bg-white p-8 rounded shadow">
            <h2 className="text-2xl font-bold mb-6">Add New Patient</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <h3 className="font-bold mb-3">Basic Info</h3>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="border p-2"
                        />
                        <input
                            name="age"
                            value={form.age}
                            onChange={handleChange}
                            placeholder="Age"
                            className="border p-2"
                        />

                        <select
                            name="gender"
                            value={form.gender}
                            onChange={handleChange}
                            className="border p-2"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                        <input
                            name="blood"
                            value={form.blood}
                            onChange={handleChange}
                            placeholder="Blood Group"
                            className="border p-2"
                        />

                        <input
                            name="height"
                            value={form.height}
                            onChange={handleChange}
                            placeholder="Height (cm)"
                            className="border p-2"
                        />

                        <input
                            name="weight"
                            value={form.weight}
                            onChange={handleChange}
                            placeholder="Weight (kg)"
                            className="border p-2"
                        />

                        <input
                            name="bmi"
                            value={form.bmi}
                            readOnly
                            placeholder="BMI"
                            className="border p-2 bg-gray-100"
                        />


                        <input
                            name="contact"
                            value={form.contact}
                            onChange={handleChange}
                            placeholder="Contact"
                            className="border p-2 col-span-2"
                        />
                    </div>
                </div>

                <div>
                    <h3 className="font-bold mb-3">Initial Vitals</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <input
                            name="bloodSugar"
                            value={form.bloodSugar}
                            onChange={handleChange}
                            placeholder="Blood Sugar"
                            className="border p-2"
                        />
                        <input
                            name="bloodPressure"
                            value={form.bloodPressure}
                            onChange={handleChange}
                            placeholder="Blood Pressure"
                            className="border p-2"
                        />
                        <input
                            name="heartRate"
                            value={form.heartRate}
                            onChange={handleChange}
                            placeholder="Heart Rate"
                            className="border p-2"
                        />
                    </div>
                </div>

                <button className="bg-blue-600 text-white px-6 py-2 rounded">
                    Add Patient
                </button>
            </form>
        </div>
    )
}

export default AddPatient
