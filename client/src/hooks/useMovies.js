import {
  useState, useEffect, createContext, useContext,
} from 'react'

import useFetch from './useFetch'



const useMovies = () => {

  const { doFetch } = useFetch()

  const [ topRatedMovies, setTopRatedMovies ] = useState()
  const [ nowPlayingMovies, setNowPlayingMovies ] = useState()

  const [ currentSearchResults, setCurrentSearchResults ] = useState(null)


  const getTopRatedMovies = async (page) => doFetch({
    endpoint: `/api/movies/top_rated?p=${page}`,
    method: 'GET',
  }).then(setTopRatedMovies)

  const getNowPlayingMovies = async (page) => doFetch({
    endpoint: `/api/movies/now_playing?p=${page}`,
    method: 'GET',
  }).then(setNowPlayingMovies)

  const getMovieInfo = async (id) => doFetch({
    endpoint: `/api/movies/movie/details/${id}`,
    method: 'GET',
  })

  const searchMovie = (term, page) => doFetch({
    endpoint: `/api/movies/search/title/${term}'?p=${page}`,
    method: 'GET',
  }).then((ms) => (ms.message ? null : setCurrentSearchResults(ms)))


  useEffect(() => {
    getTopRatedMovies()
    getNowPlayingMovies()
    searchMovie('a', 500)

    console.log('topRatedMovies=', topRatedMovies)
    console.log('nowPlayingMovies=', nowPlayingMovies)
    console.log('currentSearchResults=', currentSearchResults)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])


  return {
    topRatedMovies,
    nowPlayingMovies,
    currentSearchResults,
    getMovieInfo,
    searchMovie,
  }

}


const MoviesC = createContext(null)

const Movies = () => useContext(MoviesC)



export {
  useMovies,
  MoviesC,
  Movies,
}
