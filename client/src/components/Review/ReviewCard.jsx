import styled from 'styled-components'



const ReviewCard = ({ movie }) => (
  <ReviewCardWrapper>
    <Poster src = { movie.poster_path } />
    <MovieTitle>{movie?.movie_title}</MovieTitle>
    <ReviewBody>{ movie?.body }</ReviewBody>
  </ReviewCardWrapper>
)

const ReviewCardWrapper = styled.div`
  max-width: 40rem;
  max-height: 30vh;
  margin-right: 5rem;
  display: flex;
  flex-direction: column;
`

const ReviewBody = styled.div`
  font-size: 3rem;
  margin-top: 1rem;
`

const ReviewAuthor = styled.div`
  font-size: 3rem;
  margin-top: 1rem;
`

const Poster = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`

const MovieTitle = styled.h3`
  max-width: available;
  font-size: 4rem;
  margin-top: 2rem;
`


export default ReviewCard
