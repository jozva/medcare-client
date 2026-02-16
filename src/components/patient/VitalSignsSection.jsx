function VitalSignsSection({ vitals }) {
  if (!vitals) return <div className="bg-white p-6 rounded shadow"> <p className="text-xl font-bold mb-4">No vitals available</p> </div>

  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Vital Signs</h3>
      <p>Blood Sugar: {vitals.blood_sugar}</p>
      <p>Blood Pressure: {vitals.blood_pressure}</p>
      <p>Heart Rate: {vitals.heart_rate}</p>
    </div>
  )
}

export default VitalSignsSection
