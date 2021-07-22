import { Movies as M } from '../../hooks/useMovies'

import { H1 } from '../../components/styledComps/Typography'
import MovieList from '../../components/Movie/MovieList'



const Movies = () => {

  const { topRatedMovies } = M()

  console.log('Movies topRatedMovies=', topRatedMovies)
  if (!topRatedMovies) {
    return (' no movies')
  } 
  return (
    <div>
      <H1>
        Movies
      </H1>
      <MovieList
        title = "Top rated movies"
        movies = { topRatedMovies.results }
      />
    </div>
  )
  
}



export default Movies
