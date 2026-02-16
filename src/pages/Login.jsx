import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { supabase } from "../config/supabase"

function Login() {
    const navigate = useNavigate()

    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { email, password } = form

        if (!email || !password) {
            alert("All fields required")
            return
        }

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) {
            alert(error.message)
            return
        }

        const user = data.user

        const { data: profile, error: profileError } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single()

        if (profileError) {
            alert(profileError.message)
            return
        }

        localStorage.setItem("user", JSON.stringify(profile))

        if (profile.role === "doctor") {
            navigate("/doctor")
        } else {
            navigate("/patient")
        }
    }

    return (
        <section className="flex w-[100vw] h-[100vh] justify-center">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col border my-auto gap-4 px-10 py-8 rounded-md"
            >
                <p className="text-center font-bold text-2xl">Login</p>

                <input
                    name="email"
                    placeholder="Email"
                    className="border p-2 rounded w-[275px]"
                    onChange={handleChange}
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    className="border p-2 rounded"
                    onChange={handleChange}
                />

                <button
                    type="submit"
                    className="bg-blue-600 text-white p-2 rounded font-bold"
                >
                    Login
                </button>

                <p>
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600">
                        Register
                    </Link>
                </p>
            </form>
        </section>
    )
}

export default Login
