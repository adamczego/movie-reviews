import styled from 'styled-components'
import { H1 } from '../styledComps/Typography'
import MovieCard from './MovieCard'
import { Reviews } from '../../hooks/useReviews'



const MovieList = ({ movies, title, loadNextPage }) => {
  
  return (
    <>
      <H1>
        {' '}
        {title}
        {' '}
      </H1>
      <MovieListWrapper isPresent={movies?.results.length > 0}>
        {
          movies?.results?.map((m) => (
            <MovieCard key={m.id} movie={m} />
          ))
        }
      </MovieListWrapper>
    </>
  )
}

const MovieListWrapper = styled.div`
  //margin: 0 4rem;
  display: ${({ isPresent }) => (isPresent ? 'flex' : 'none')};
  //display: flex;
  overflow: auto;
  overflow-y: visible;
  white-space: nowrap;
  min-height: 50vh;
`

const LoadMoreButton = styled.button`
  border: 1px solid black;
  font-size: 3rem;
  cursor: pointer;
`

export default MovieList
