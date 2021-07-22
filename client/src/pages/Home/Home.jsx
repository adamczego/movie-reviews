import { H1 } from '../../components/styledComps/Typography'
import { User } from '../../hooks/useUser'


const Home = () => {

  const { userData, isLoggedIn } = User()

  const goToDashboard = () => {
    window.location.href = '/dashboard'
    return true
  }
  const goToMovies = () => {
    window.location.href = '/movies'
    return true
  }
  return (
    <div>
      <H1>
        { 
          isLoggedIn 
            ? (
              <>
                <p>Hi, youre in now</p>
                <button type="button" onClick={() => goToDashboard() }>Dashboard</button>
                <button type="button" onClick={() => goToMovies() }>Movies</button>
              </>
            )
            : 'Youre logged out'
         }
      </H1>
    </div>
  )
}

export default Home
