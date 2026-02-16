import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"

import Doctor from "./pages/Doctor"
import DoctorDashboard from "./pages/DoctorDashboard"
import Patients from "./pages/Patients"
import AddPatient from "./pages/AddPatient"
import DoctorPatientDetails from "./pages/DoctorPatientDetails"

import PatientLayout from "./pages/PatientLayout"
import PatientDashboard from "./pages/PatientDashboard"
import VitalSignsSection from "./components/patient/VitalSignsSection"
import MedicationsSection from "./components/patient/MedicationsSection"
import MedicalHistorySection from "./components/patient/MedicalHistorySection"
import UpcomingTestsSection from "./components/patient/UpcomingTestsSection"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/doctor" element={<Doctor />}>
          <Route index element={<DoctorDashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="add-patient" element={<AddPatient />} />
          <Route path="patient/:id" element={<DoctorPatientDetails />} />
        </Route>

        <Route path="/patient" element={<PatientLayout />}>
          <Route index element={<PatientDashboard />} />
          <Route path="vitals" element={<VitalSignsSection />} />
          <Route path="medications" element={<MedicationsSection />} />
          <Route path="history" element={<MedicalHistorySection />} />
          <Route path="tests" element={<UpcomingTestsSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
