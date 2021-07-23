import styled from 'styled-components'
import { Reviews } from '../../hooks/useReviews'



const MovieCard = ({ movie }) => {

  const { handleReviewDataChange, saveReview } = Reviews()
  
  return (
    <MovieCardWrapper>
      <Poster src = { `https://image.tmdb.org/t/p/w500${movie.poster_path}` } />
      <MovieTitle>{movie?.title}</MovieTitle>
      <ReviewInput
        id = "body"
        type = "text"
        onChange = {
          (e) => handleReviewDataChange({
            body: e.target.value,
            poster_path: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
            title: movie?.title,
            movieId: movie?.id,
          })
        }
        placeholder = "Your review"
      />
      <ReviewSubmit onClick = { saveReview }>send</ReviewSubmit>
    </MovieCardWrapper>
  )
}

const ReviewInput = styled.input`
  margin-top: 4rem;
  font-size: 3.5rem;
`

const ReviewSubmit = styled.button`
  margin-top: 1rem;
  font-size: 3.5rem;
  max-width: 10rem;
  height: 4rem;
  border: 1px solid black;
`

const MovieCardWrapper = styled.div`
  max-width: 40rem;
  max-height: 30vh;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
  //align-items: flex-start;
`

const Poster = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`

const MovieTitle = styled.h3`
  display: inline-block;
  max-width: available;
  font-size: 4rem;
  margin-top: 2rem;
  //padding-right: 2rem;
`


export default MovieCard
