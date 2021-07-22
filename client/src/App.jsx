import { Route, Switch } from 'react-router-dom'

import { UserC, useUser } from './hooks/useUser'
import { ThemeC, useTheme } from './theme/useTheme'
import { MoviesC, useMovies } from './hooks/useMovies'
import { ReviewsC, useReviews } from './hooks/useReviews'

import GlobalStyles from './theme/GlobalStyles'

// import { Dashboard, Home, Movies } from './pages'
import { Dashboard, Movies } from './pages'
import Header from './components/Header/Header'
import './App.css'


const App = () => {

  const user = useUser()
  const theme = useTheme()
  const movies = useMovies()
  const reviews = useReviews(user)


  return (
    <>
      <UserC.Provider value={user}>
        <ThemeC.Provider value={theme}>
          <MoviesC.Provider value={movies}>
            <ReviewsC.Provider value={reviews}>
              <GlobalStyles />

              <Header />

              <Switch>

                <Route exact path="/">
                  <Dashboard />
                </Route>

                <Route exact path="/movies" render = { () => <Movies /> } />
                 

                <Route exact path="/dashboard" render= { () => <Dashboard /> } />
               

              </Switch>
            </ReviewsC.Provider>
          </MoviesC.Provider>
        </ThemeC.Provider>
      </UserC.Provider>
    </>
  )

}



export default App
