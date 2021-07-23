import { useEffect } from 'react'
import styled from 'styled-components'
import { Movies as M } from '../../hooks/useMovies'

import { H1 } from '../../components/styledComps/Typography'
import MovieList from '../../components/Movie/MovieList'
import { Reviews } from '../../hooks/useReviews'



const Movies = () => {

  const {
    topRatedMovies, nowPlayingMovies, searchMovie, currentSearchResults,
  } = M()


  return (
    <MoviesWrapper>

      <H1>
        Movies
      </H1>

      <MovieSearchBar
        // onChange = { handleSearch }
        onChange = { (e) => searchMovie(e.target.value, 1) }
        type = "text"
        id = "movie-title"
        placeholder = "search for a movie"
      />

      <MovieList
        title = "searched"
        movies = { currentSearchResults }
        // loadNextPage = { () => loadNextPage('search', 'searchTerm') }
      />

      <MovieList
        title = "Top rated movies"
        movies = { topRatedMovies }
        // loadNextPage = { () => loadNextPage('top') }
      />

      <MovieList
        title = "Now playing"
        movies = { nowPlayingMovies }
        // loadNextPage = { () => loadNextPage('now') }
      />
    </MoviesWrapper>
  )

}


const MoviesWrapper = styled.div`
  margin: 4rem;
`

const MovieSearchBar = styled.input`
  //min-height: 6rem;
  min-width: 50rem;
  font-size: 3rem;
  padding: 2rem;
`


export default Movies
