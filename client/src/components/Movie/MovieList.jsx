import { H1 } from '../styledComps/Typography'
import MovieCard from './MovieCard'

const MovieList = ({ movies, title } ) => (
  <div>
    <H1>
      { title }
    </H1>
    <div className="movie-flex">
      {
        movies?.map((m, i) => (
          // eslint disable next line
          <MovieCard key = { m.id + i.toString() } movie = { m } />
        ))
      }
    </div>
  </div>
)

export default MovieList
