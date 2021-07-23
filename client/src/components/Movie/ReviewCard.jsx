import { useEffect } from 'react'
import { Reviews as R } from '../../hooks/useReviews'

const ReviewCard = ({ movie, reviews }) => {

  const { getAllReviews } = R()
      
  // ujra lekérjük a review-okat hogy megjelenjen amit elmentettünk éppen.
  useEffect( () => {
    getAllReviews()
  // eslint-disable-next-line react-hooks/exhaustive-deps  
  }, [ ])


  return (
    <>
      <div className="review-card">
        <div className="movie-details">
          <img src={`https://image.tmdb.org/t/p/w185/${movie?.poster_path}`} alt="poster" />
          <h4 className="movie-title">{movie?.title}</h4>
        </div>
        <div className="reviews">
          { 
            reviews.map( (review, i) =>
              // eslint-disable-next-line
              <div key={i.toString()} className="review">
                <p className="author">{review?.author_name}</p>
                <p>{review?.body}</p>
                <p className="created_at">{review?.created_at}</p>
                
              
              </div>)
          }
        </div>
      </div>
    </>
  )
}

export default ReviewCard
