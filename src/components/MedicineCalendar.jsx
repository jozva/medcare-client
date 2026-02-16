import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"

function MedicineCalendar({ takenDates = [] }) {
  const today = new Date().toISOString().split("T")[0]

  const tileClassName = ({ date, view }) => {
    if (view !== "month") return ""

    const d = date.toISOString().split("T")[0]

    if (takenDates.includes(d)) {
      return "taken-day"
    }

    if (d === today) {
      return "today-day"
    }

    return ""
  }

  const tileDisabled = ({ date, view }) => {
    if (view !== "month") return false

    const d = date.toISOString().split("T")[0]

    return d !== today
  }

  return (
    <div className="bg-white p-4 mt-7 rounded shadow h-fit">
      <p className="font-bold mb-3 text-center">Medicine Tracker</p>

      <Calendar
        showNeighboringMonth={false}
        tileClassName={tileClassName}
        tileDisabled={tileDisabled}
      />
    </div>
  )
}

export default MedicineCalendar
