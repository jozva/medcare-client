import { useNavigate } from "react-router-dom"
import Logo from "../assets/images/logo.png"
import { supabase } from "../config/supabase"

function Navbar() {
    const navigate = useNavigate()

    const logout = async () => {
        await supabase.auth.signOut()
        localStorage.removeItem("user")
        navigate("/login")
    }

    return (
        <section className="fixed top-0 left-0 w-full h-20 bg-[#fcfefe] z-50">
            <div className="flex place-content-between mx-20 h-full">
                <div className="h-full flex">
                    <img src={Logo} alt="Logo" className="h-full" />
                    <div className="my-auto font-bold">
                        <p>Care Taker</p>
                        <p>Dashboard</p>
                    </div>
                </div>

                <button
                    onClick={logout}
                    className="flex items-center gap-3 border my-auto p-2 px-6 cursor-pointer rounded"
                >
                    Logout
                </button>
            </div>
        </section>
    )
}

export default Navbar
