import axios from "axios"
import { useState } from "react"

export default function Login() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://127.0.0.1:8000/api/login", {email,password})
      .then(response  => setData(response.data))
      .catch(error => setErrors(error.response.data.error))

    if (data && data.success.token) {
      localStorage.setItem('token', data.success.token);
      window.location.href = "http://127.0.0.1:3000";
    }
  }

  return (
    <div className="mx-auto px-4 w-[90vw] flex items-center justify-center h-fit mt-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold self-center">Login</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
          <input onChange={(e) => setEmail(e.target.value)} type="text" className="grow" placeholder="Email" />
        </label>
        {(errors && errors.email) && <p className="text-red-600">{errors.email[0]}</p>}
        <label className="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="grow" placeholder="Password" />
        </label>
        {(errors && errors.password) && <p className="text-red-600">{errors.password[0]}</p>}
        <button className="btn">Login</button>
        {typeof errors !== "object"  && <p className="text-red-600">{errors}</p>}
      </form>
    </div>
  )
}
