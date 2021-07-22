import { Route, Switch } from 'react-router-dom'

import { UserC, useUser } from './hooks/useUser'
import { ThemeC, useTheme } from './theme/useTheme'
import { MoviesC, useMovies } from './hooks/useMovies'
import { ReviewsC, useReviews } from './hooks/useReviews'

import GlobalStyles from './theme/GlobalStyles'

import { Home, Movies, Reviews } from './pages'
import Header from './components/Header/Header'



const App = () => {

  const user = useUser()
  const theme = useTheme()
  const movies = useMovies()
  const reviews = useReviews(user)


  return (
    <>
      <UserC.Provider value = { user }>
        <ThemeC.Provider value = { theme }>
          <MoviesC.Provider value = { movies }>
            <ReviewsC.Provider value = { reviews }>
              <GlobalStyles />
          
              <Header />

              <Switch>

                <Route exact path="/">
                  <Home />
                </Route>

                <Route exact path="/movies">
                  <Movies />
                </Route>

                <Route exact path="/reviews">
                  <Reviews />
                </Route>

              </Switch>
            </ReviewsC.Provider>
          </MoviesC.Provider>
        </ThemeC.Provider>
      </UserC.Provider>
    </>
  )

}



export default App
