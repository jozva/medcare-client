function UpcomingTestsSection({ tests = [] }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-bold mb-4">Upcoming Tests</h3>

      {tests.length === 0 ? (
        <p>No upcoming tests</p>
      ) : (
        <ul>
          {tests.map((t) => (
            <li key={t.id}>
              {t.name} – {t.date}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UpcomingTestsSection
