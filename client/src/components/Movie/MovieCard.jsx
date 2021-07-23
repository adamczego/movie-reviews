import { useEffect } from 'react'
import { useState } from 'react'
import { User } from '../../hooks/useUser'
import { Movies as M } from '../../hooks/useMovies'
import { Reviews as R } from '../../hooks/useReviews'

const MovieCard = ({ movie }) => {

  // const movies = Movies()
  const [rate1, setRate1] = useState(false)
  const [reviewtext, setReviewtext] = useState('')
  const [rateNo, setRateNo] = useState(0)
  const [isLoading, setIsLoading] = useState(null)
  const [author, setAuthor] = useState( { id: User().userData?.sub, name: User().userData?.name } ) 
  
  const { getAllReviews } = R()
      
  // ujra lekérjük a review-okat hogy megjelenjen amit elmentettünk éppen.
  useEffect( () => {
    getAllReviews()
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [ ])



  const RateMovie = () => {
    const saveRate = async () => {
 
      setIsLoading(true)

      const review = {
        body: document.getElementById('review').value,
        author: author.id,  
        author_name: author.name,
        rate: document.getElementById('rate').value,
        movieID: rate1.movieID,
        poster_path: rate1.poster_path,
        movieTitle: rate1.movieTitle,
      }

      console.log('review=', review)

      const endpoint = '/api/reviews'
   
      await fetch(
        `http://localhost:8080${endpoint}`,
        {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
          body: JSON.stringify({ review }),
        },
      )
  

      setIsLoading(false)
      setReviewtext('')
      setRateNo(0)
      setRate1(false)
    }

    // const handlChange = (e) => {

    // }
    const generateKey = (pre) => `${pre}_${new Date().getTime()}`
 
    return (
      <>
   
        {
          rate1
            ? (
              <div className="rate-window">
                <textarea key={generateKey()} type="text" id="review" name="review" placeholder="please enter your review..." />
                <div className="slidecontainer">
                  <input 
                    className="rate" 
                    key={generateKey()}
                    id="rate"
                    type="range" 
                    min="1" 
                    max="10" 
                    step=".5"                            
                  />
                </div>
              </div>
            )
            : <p>.</p>
        }
        {
          rate1
            ? <button type="button" onClick={() => saveRate()}>{isLoading ? '...' : 'Save'}</button>
            : <button type="button" onClick={() => setRate1( { movieID: movie.id, movieTitle: movie.title, poster_path: movie?.poster_path } )}>Rate</button>
        }
      </>
    )
  }


  return (
    <div className="movie-card">

      <img src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} alt="poster" />
      <h4 className="movie-title">{movie?.title}</h4>
      {movie?.body}
      {movie?.author_name}

      {User().isLoggedIn
        ? <RateMovie />
        : 'to rate please login'}

    </div>

  )
}

export default MovieCard
