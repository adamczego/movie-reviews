import styled from 'styled-components'
import { H1 } from '../styledComps/Typography'
import ReviewCard from './ReviewCard'



const ReviewList = ({ movies, title }) => (
  <>
    <H1>
      {' '}
      { title }
      {' '}
    </H1>

    <ReviewListWrapper isPresent = { movies?.length > 0 }>
      {
            movies?.map((m) => (
              <ReviewCard key={m.id} movie={m} />
            ))
      }
    </ReviewListWrapper>
    )

  </>
)

const ReviewListWrapper = styled.div`
  //margin: 0 4rem;
  display: ${({ isPresent }) => (isPresent ? 'flex' : 'none')};
  overflow: auto;
  white-space: nowrap;
  height: 40vh;
`



export default ReviewList
