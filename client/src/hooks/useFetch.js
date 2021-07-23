import { useState, useEffect } from 'react'



const useFetch = () => {

  const [ data, setData ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(false)

  const doFetch = async ({ endpoint, method, body }) => {
    setIsLoading(true)
    const res = await fetch(
      `https://ccmovieserver.sloppy.zone:8080${endpoint}`, 
      {
        method,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://ccmovieserver.sloppy.zone',
        },
        body: JSON.stringify(body),
      },
    )

    const d = await res.json()

    setData(d)
    setIsLoading(false)
    return d
  }


  return {
    data,
    isLoading,
    doFetch,
  }

}



export default useFetch
