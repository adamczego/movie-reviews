import {
  useState, useEffect, createContext, useContext,
} from 'react'

import useFetch from './useFetch'



const useReviews = (user) => {

  const { doFetch } = useFetch()

  const [ reviewData, setReviewData ] = useState({
    body: 'here is some review for a movie',
    author: '108119665129465060839',
    rate: 5,
    movieId: '379686',
  })

  const [ userReviews, setUserReviews ] = useState(null)

  const [ searchedReviews, setSearchedReviews ] = useState(null)


  const loadUserReviews = async () => doFetch({
    endpoint: '/api/reviews/own',
    method: 'GET',
  }).then((rs) => (rs.msg ? null : setUserReviews(rs)))

  const saveReview = async () => doFetch({
    endpoint: '/api/reviews',
    method: 'POST',
    body: { review: reviewData },
  }).then(() => loadUserReviews())

  const searchReviews = ({ prop, val }) => {

  }

  // for handling review input change
  const handleReviewDataChange = (e) => setReviewData({
    ...reviewData,
    [e.target.id]: e.target.value,
  })


  useEffect(() => {
    if ( user.isLoggedIn ) {
      loadUserReviews()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ user.isLoggedIn ])


  return {
    reviewData,
    setReviewData,
    userReviews,
    saveReview,
    handleReviewDataChange,
  }

}


const ReviewsC = createContext(null)

const Reviews = () => useContext(ReviewsC)



export {
  useReviews,
  ReviewsC,
  Reviews,
}
