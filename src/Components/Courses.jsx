import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function Courses() {

  const [data, setData] = useState(null)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/courses")
    .then(response  => setData(response.data.data))
    .catch(error => setErrors(error.response.data.error))
  }, [])

  console.log(data)


  return (
    <div className="mx-auto px-4 w-[90vw] flex items-center justify-center h-fit mt-20">
      <div className="flex items-center justify-center flex-wrap gap-4">
        {
          data && data.map((obj,key) => {
            return <div className="card w-96 bg-base-100 shadow-xl image-full">
              <figure><img src={`https://i.ytimg.com/vi_webp/${obj.link.slice(32,)}/maxresdefault.webp`} alt="Video" /></figure>
              <div className="card-body">
                <h2 className="card-title">{obj.title}</h2>
                <p>{obj.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/courses/${obj.id}`} className="btn btn-primary">Watch Now</Link>
                </div>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}
