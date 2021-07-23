import {
  useState, useEffect, createContext, useContext,
} from 'react'

import useFetch from './useFetch'



const useReviews = (user) => {

  const { doFetch } = useFetch()

  const [ reviewData, setReviewData ] = useState({
    body: 'here is some review for a movie',
    author: '108119665129465060839',
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
    body: {
      review: {
        ...reviewData,
        author: user.userData.sub,
      }, 
    },
  }).then(() => loadUserReviews())

  const searchReviews = (val) => doFetch({
    endpoint: `/api/reviews/search/${val}`,
    method: 'GET',
  }).then((rs) => {
    console.log({ rs })
    return (rs.msg ? null : setSearchedReviews(rs))
  })

  // for handling review input change
  const handleReviewDataChange = (data) => setReviewData(data)


  useEffect(() => {
    if ( user.isLoggedIn ) {
      loadUserReviews()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ user.isLoggedIn ])

  useEffect(() => {
    console.log(searchedReviews)
  }, [ searchReviews ])

  return {
    reviewData,
    userReviews,
    searchedReviews,
    searchReviews,
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
