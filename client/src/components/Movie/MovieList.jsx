import styled from 'styled-components'
import { H1 } from '../styledComps/Typography'
import MovieCard from './MovieCard'



const MovieList = ({ movies, title, loadNextPage }) => (
  <>
    <H1> 
      {' '}
      { title }
      {' '}
    </H1>
    <MovieListWrapper>
      {
        movies?.results?.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))
      }
    </MovieListWrapper>
  </>
)

const MovieListWrapper = styled.div`
  //margin: 0 4rem;
  display: flex;
  overflow: auto;
  white-space: nowrap;
  height: 40vh;
`

const LoadMoreButton = styled.button`
  border: 1px solid black;
  font-size: 3rem;
  cursor: pointer;
`

export default MovieList
