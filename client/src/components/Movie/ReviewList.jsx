
import { H1 } from '../styledComps/Typography'
import ReviewCard from './ReviewCard'

const ReviewList = ({ movies, title } ) => {

  
    
  const uniqueAuthors = Array.from(new Set(movies.map( (x) => x.author_name)))
  // eslint-disable-next-line
    .map( (author_name) => {
      return ({
        author_name,
        // eslint-disable-next-line
        author_name: movies.find( (x) => x.author_name === author_name).author_name,
        // eslint-disable-next-line
 
      })
      
    } )

  const uniqueMovies = Array.from(new Set(movies.map( (x) => x.movie_id)))
  // eslint-disable-next-line
    .map( (movie_id) => {
      return ({
        movie_id,
        // eslint-disable-next-line
        title: movies.find( (x) => x.movie_id === movie_id).title,
        // eslint-disable-next-line
        poster_path: movies.find( (x) => x.movie_id === movie_id).poster_path,
      })
      
    } )
  console.log('uniqueAuthors   ', uniqueAuthors )

  return (
    <div>
      <H1>
        { title }
      </H1>
      { 
            uniqueAuthors.map( (a, i) => <button className="authorFilter" type="button" key={i.toString()}>{a.author_name}</button>)
          }
      <div className="reviews-flex">
        { // eslint-disable-next-line
          uniqueMovies?.map((m, i) => <ReviewCard key={m.id} movie={m} reviews={movies.filter((mv) => mv.movie_id === m.movie_id )} /> )
        }
      </div>
    </div>
  )
}



export default ReviewList
