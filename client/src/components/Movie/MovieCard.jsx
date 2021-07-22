// import { useState, useEffect } from 'react'
import { useState } from 'react'
// import { Movies, MoviesC } from '../../hooks/useMovies'
// import { useReviews as UR } from '../../hooks/useReviews'
// import { UserC, User } from '../../hooks/useUser'
import { User } from '../../hooks/useUser'

const MovieCard = ({ movie }) => {

  // const movies = Movies()
  const [rate1, setRate1] = useState(false)
  const [reviewtext, setReviewtext] = useState('')
  const [rateNo, setRateNo] = useState(0)
  const [isLoading, setIsLoading] = useState(null)
  const [userID, setUserID] = useState(User().userData?.sub) // honnan szedjem a userID ?

  /* console.log('user=', User()) */

  const RateMovie = () => {
    const saveRate = async (movieID, movieTitle) => {

      setIsLoading(true)

      const review = {
        body: reviewtext,
        author: userID,
        rate: rateNo,
        movieID,
        movieTitle,
      }

      // console.log('review=', review)

      const endpoint = '/api/reviews'
      // const res = await fetch(
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

      // const d = await res.json()
      // console.log('d=', d)
      setIsLoading(false)
      setReviewtext('')
      setRateNo(0)
      setRate1(false)
    }

    // const handlChange = (e) => {

    // }

    return (
      <>
   
        {
          rate1
            ? (
              <div className="rate-window">
                <textarea type="text" id="review" name="review" value={reviewtext} onChange={(e) => setReviewtext(e.target.value)} placeholder="please enter your review..." />
                <div className="slidecontainer">
                  <input 
                    className="rate" 
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
            ? <button type="button" onClick={() => saveRate(movie.id, movie.title)}>{isLoading ? '...' : 'Save'}</button>
            : <button type="button" onClick={() => setRate1(movie.id, movie.title)}>Rate</button>
        }
      </>
    )
  }


  return (
    <div className="movie-card">

      <img src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} alt="poster" />
      <h4 className="movie-title">{movie?.title}</h4>


      {User().isLoggedIn
        ? <RateMovie />
        : 'to rate please login'}

    </div>

  )
}

export default MovieCard
