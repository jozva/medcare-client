import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { supabase } from "../config/supabase"

function Register() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "",
        age: "",
        gender: "",
        blood: "",
        contact: "",
        height: "",
        weight: "",
        bmi: ""
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

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match")
            return
        }

        const { data, error } = await supabase.auth.signUp({
            email: form.email,
            password: form.password
        })

        if (error) {
            alert(error.message)
            return
        }

        const user = data.user

        const { error: profileError } = await supabase
            .from("profiles")
            .insert([
                {
                    id: user.id,
                    name: form.name,
                    role: form.role
                }
            ])

        if (profileError) {
            alert(profileError.message)
            return
        }

        alert("Signup successful")
        navigate("/")

        if (form.role === "patient") {
            await fetch("https://medcare-server-qlok.onrender.com/api/patients", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    age: form.age,
                    gender: form.gender,
                    blood: form.blood,
                    contact: form.contact,
                    height: form.height,
                    weight: form.weight,
                    bmi: form.bmi,
                    user_id: user.id
                })

            })
        }

    }

    return (
        <section className="flex w-[100vw] h-[100vh] justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col border my-auto gap-4 px-10 py-8 rounded-md"
            >
                <p className="text-center font-bold text-2xl">Register</p>

                <input
                    name="name"
                    placeholder="Name"
                    className="border p-2 rounded w-[300px]"
                    onChange={handleChange}
                />

                <input
                    name="email"
                    placeholder="Email"
                    className="border p-2 rounded"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                    onChange={handleChange}
                />

                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    className="border p-2 rounded"
                    onChange={handleChange}
                />

                <select
                    name="role"
                    className="border p-2 rounded"
                    onChange={handleChange}
                >
                    <option value="">Select role</option>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>

                {form.role === "patient" && (
                    <>
                        <input
                            name="age"
                            placeholder="Age"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        />

                        <select
                            name="gender"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>

                        <input
                            name="blood"
                            placeholder="Blood Group"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            name="contact"
                            placeholder="Contact"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            name="height"
                            placeholder="Height (cm)"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            name="weight"
                            placeholder="Weight (kg)"
                            className="border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            name="bmi"
                            value={form.bmi}
                            readOnly
                            placeholder="BMI"
                            className="border p-2 rounded bg-gray-100"
                        />


                    </>
                )}


                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded font-bold"
                >
                    Create Account
                </button>
            </form>
        </section>
    )
}

export default Register
