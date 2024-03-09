import axios from "axios"
import { useEffect, useState } from "react"

export default function Home() {


  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/getUser")
    .then(response  => setData(response.data))
    .catch(error => setErrors(error.response.data.error))
  }, [])

  console.log(data)
  console.log(errors)


  return (
    <div className="mx-auto px-4 w-[90vw] flex flex-col items-center justify-center h-fit mt-20">
        <h1 className="text-4xl font-bold self-center">Hi User</h1>
        <h1 className="text-4xl font-bold self-center">Welcome To CINK</h1>
        <h2>when your journey begins</h2>
    </div>
  )
}
