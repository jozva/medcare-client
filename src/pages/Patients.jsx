import PatientCard from "../components/PatientCard"

function Patients() {


    return (
        <section className="flex flex-wrap">
            {patients.map((p) => (
                <PatientCard key={p.id} patient={p} />
            ))}
        </section>
    )
}

export default Patients
