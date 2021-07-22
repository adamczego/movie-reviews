import { H1 } from '../styledComps/Typography'
import MovieCard from './MovieCard'

const MovieList = ({ movies, title } ) => (
  <div>
    <H1>
      { title }
    </H1>
    <div className="movie-flex">
      {
        movies?.map((m) => (
          <MovieCard key = { m.id } movie = { m } />
        ))
      }
    </div>
  </div>
)

export default MovieList
