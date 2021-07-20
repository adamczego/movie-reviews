import {
  useState, useEffect, createContext, useContext,
} from 'react'

import useFetch from './useFetch'



const useMovies = () => {

  const { doFetch } = useFetch()

  const [ topRatedMovies, setTopRatedMovies ] = useState()


  const getTopRatedMovies = async () => {
    const movies = await doFetch({
      endpoint: '/api/movies/top_rated',
      method: 'GET',
    })

    setTopRatedMovies(movies.results)
  }


  useEffect(() => {
    console.log(topRatedMovies)
  }, [ topRatedMovies ])

  useEffect(() => {
    getTopRatedMovies()
  }, [ ])


  return {
    topRatedMovies,
  }

}


const MoviesC = createContext(null)

const Movies = () => useContext(MoviesC)



export {
  useMovies,
  MoviesC,
  Movies,
}
