export const getPatients = async () => {
  const res = await fetch("https://medcare-server-qlok.onrender.com/api/patients")
  const data = await res.json()
  return data
}

export const addPatient = async (patientData) => {
  const res = await fetch("https://medcare-server-qlok.onrender.com/api/patients", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(patientData)
  })

  const data = await res.json()
  return data
}


export const getPatientById = async (id) => {
  const res = await fetch(`https://medcare-server-qlok.onrender.com/api/patients/${id}`)
  return await res.json()
}

export const updateVitals = async (id, vitals) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/vitals`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(vitals)
    }
  )
  return await res.json()
}

export const addMedication = async (id, med) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/medications`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(med)
    }
  )
  return await res.json()
}


export const deleteMedication = async (id, medId) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/medications/${medId}`,
    { method: "DELETE" }
  )
  return await res.json()
}


export const updateMedication = async (id, medId, med) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/medications/${medId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(med)
    }
  )
  return await res.json()
}

export const addTest = async (id, test) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/tests`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(test)
    }
  )
  return await res.json()
}


export const deleteTest = async (id, testId) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/tests/${testId}`,
    { method: "DELETE" }
  )
  return await res.json()
}

export const updateTest = async (id, testId, test) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/tests/${testId}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(test)
    }
  )
  return await res.json()
}

export const markMedicationTaken = async (id) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/medication-log`,
    { method: "POST" }
  )
  return await res.json()
}

export const getMedicationLogs = async (id) => {
  const res = await fetch(
    `https://medcare-server-qlok.onrender.com/api/patients/${id}/medication-log`
  )
  return await res.json()
}

