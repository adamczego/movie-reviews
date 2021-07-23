
import { Movies as M } from '../../hooks/useMovies'
import { Reviews as R } from '../../hooks/useReviews'

import MovieList from '../../components/Movie/MovieList'
import ReviewList from '../../components/Movie/ReviewList'



const Movies = ( { whatWeShow } ) => {

 
  const { topRatedMovies } = M()
  const { nowPlayingMovies } = M()
  const { allReviews } = R()

  let data = null

  /*  console.log('topRatedMovies=', topRatedMovies)
  console.log('allReviews=', allReviews)
  console.log('nowPlayingMovies=', nowPlayingMovies) */
  // console.log('currentSearchResults=', currentSearchResults)

  if ( whatWeShow === 'Top rated movies' ) {
    data = topRatedMovies?.results
  }
  
  if ( whatWeShow === 'Newest movies' ) {
    data = nowPlayingMovies?.results 
    // miért nincs adat ?
  }
  if ( whatWeShow === 'Reviews' ) {
    data = allReviews?.results
    // nowPlayingMovies?.results 
    // miért nincs adat ?
  }

  // console.log('Movies topRatedMovies=', topRatedMovies)
  if (!(topRatedMovies || nowPlayingMovies ) ) {
    return (' no movies')
  }
  return (
    <div>
      { whatWeShow === 'Reviews' 
        ? (
          <div>
            <div className="searchPanel">
              <input placeholder="enter movie title..." />
              <button type="button">Search</button>  
            </div>
            <ReviewList
              title={whatWeShow}
              movies={data}
            />
          </div>
        )
        : (
          <MovieList
            title={whatWeShow}
            movies={data}
          />
        )}
     
    </div>
  )

}



export default Movies
