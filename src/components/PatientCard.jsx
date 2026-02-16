import { useNavigate } from "react-router-dom"
import Profile from "../assets/images/profile.png"

function PatientCard({ patient }) {
    const navigate = useNavigate()

    const openPatient = () => {
        navigate(`/doctor/patient/${patient.id}`)
    }


    return (
        <section className="mx-10 my-7">
            <div
                className="w-[280px] bg-white rounded-xl shadow hover:shadow-lg transition p-4 cursor-pointer"
                onClick={openPatient}
            >

                <img
                    src={Profile}
                    alt=""
                    className="h-[180px] w-full object-cover rounded-lg"
                />

                <p className="text-center font-bold mt-3">{patient.name}</p>

                <div className="flex justify-center w-full text-sm mb-3">
                    <p>{patient.age} Y/O</p>
                    <p className="mx-5">|</p>
                    <p>{patient.gender}</p>
                </div>

                <table className="text-sm mx-auto border-separate border-spacing-y-2">
                    <tbody>
                        <tr className="font-bold">
                            <td>Details</td>
                            <td>Patient ID : {patient.id.slice(-4)}</td>
                        </tr>
                        <tr>
                            <td className="px-3">Blood Group :</td>
                            <td>{patient.blood}</td>
                        </tr>
                        <tr>
                            <td className="px-3">BMI :</td>
                            <td>{patient.bmi}</td>
                        </tr>
                        <tr>
                            <td className="px-3">Height :</td>
                            <td>{patient.height}</td>
                        </tr>
                        <tr>
                            <td className="px-3">Weight :</td>
                            <td>{patient.weight}</td>
                        </tr>
                        <tr>
                            <td className="px-3">Contact :</td>
                            <td>{patient.contact}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default PatientCard
