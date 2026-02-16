function MedicationsSection({ meds = [] }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Medications</h3>

      {meds.length === 0 ? (
        <p>No medications</p>
      ) : (
        <ul className="space-y-2">
          {meds.map((m) => (
            <li
              key={m.id}
              className="p-3 bg-gray-100 rounded"
            >
              <span className="font-semibold">{m.name}</span> –{" "}
              {m.dosage} ({m.times.join(", ")})
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default MedicationsSection
