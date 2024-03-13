import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/foodItem')
        const res = response.json()
        setData(res)
      } catch (err) {
        console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      hello
      <div>da</div>
    </div>
  )
}

export default App
