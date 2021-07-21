import { Movies, MoviesC } from '../../hooks/useMovies'

const MovieCard = ({ movie }) => {

  const movies = Movies()

  return (
    <h3>{ movie?.title }</h3>
  )
}

export default MovieCard
