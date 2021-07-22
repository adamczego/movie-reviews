import { Movies as M } from '../../hooks/useMovies'

import { H1 } from '../../components/styledComps/Typography'
import MovieList from '../../components/Movie/MovieList'



const Movies = ( { whatWeShow } ) => {

  const { topRatedMovies } = M()
  const { nowPlayingMovies } = M()
  let data = null

  if ( whatWeShow === 'Top rated movies' ) {
    data = topRatedMovies?.results
  }
  
  if ( whatWeShow === 'Newest movies' ) {
    data = nowPlayingMovies?.results 
    // miért nincs adat ?
  }
  if ( whatWeShow === 'Reviews' ) {
    data = nowPlayingMovies?.results 
    // miért nincs adat ?
  }

  // console.log('Movies topRatedMovies=', topRatedMovies)
  if (!(topRatedMovies || nowPlayingMovies ) ) {
    return (' no movies')
  }
  return (
    <div>
      { whatWeShow === 'Reviews' 
        && (
        <div className="searchPanel">
          <input placeholder="enter movie title..." />
          <button type="button">Search</button>  
        </div>
        )}
      <MovieList
        title={whatWeShow}
        movies={data}
      />
    </div>
  )

}



export default Movies
