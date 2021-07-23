import { useEffect } from 'react'
import styled from 'styled-components'

import { Reviews as R } from '../../hooks/useReviews'

import ReviewList from '../../components/Review/ReviewList'
import { H1 } from '../../components/styledComps/Typography'



const Reviews = () => {

  const {
    reviewData, userReviews, searchedReviews, saveReview, handleReviewDataChange, searchReviews,
  } = R()


  return (
    <ReviewsWrapper>

      <H1>
        My reviews
      </H1>

      <ReviewSearchBar
        onChange = { (e) => searchReviews(e.target.value) }
        type = "text"
        id = "movie-title"
        placeholder = "search for a reviewed movie"
      />

      <ReviewList
        title = "searched"
        movies = { searchedReviews }
        // loadNextPage = { () => loadNextPage('top') }
      />

      <ReviewList
        title = "All of my reviews"
        movies = { userReviews }
        // loadNextPage = { () => loadNextPage('top') }
      />
    </ReviewsWrapper>
  )

}


const ReviewsWrapper = styled.div`
  margin: 4rem;
`

const ReviewSearchBar = styled.input`
  //min-height: 6rem;
  min-width: 50rem;
  font-size: 3rem;
  padding: 2rem;
`


export default Reviews
