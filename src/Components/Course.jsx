import axios from "axios";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

export default function Course() {

    const [data, setData] = useState(null)
    const [errors, setErrors] = useState(null)

    const params = useParams()

    useEffect(() => {
        const {id} = params

        axios.get(`http://127.0.0.1:8000/api/courses/${id}`)
        .then(response  => setData(response.data.data))
        .catch(error => setErrors(error.response.data.error))
    }, [])

  return (
    <div className="mx-auto px-4 w-[90vw] flex items-center justify-center h-fit mt-20">
        <div className="hero min-h-screen w-screen">
            <div className="hero-content text-center">
                <div className="max-w-md flex flex-col items-center justify-center">
                    {data && <h1 className="text-5xl font-bold">{data.title}</h1>}
                    {data && <p className="py-6 self-center">{data.description}</p>}
                    {data && <iframe className="self-center h-[220px] w-[400px] md:w-[600px] md:h-[320px] lg:w-[853px] lg:h-[480px] rounded-lg" src={`${data.link.slice(0,23)}/embed/${data.link.slice(32,)}`} title="Embed videos and playlists" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>}
                </div>
            </div>
        </div>
    </div>
  )
}
