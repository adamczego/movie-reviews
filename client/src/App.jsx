import { Route, Switch } from 'react-router-dom'

import { useTheme, ThemeC } from './theme/useTheme'
import { UserC, useUser } from './hooks/useUser'
import { MoviesC, useMovies } from './hooks/useMovies'

import GlobalStyles from './theme/GlobalStyles'

import { Dashboard, Home, Movies } from './pages'
import Header from './components/Header/Header'



const App = () => {

  const user = useUser()
  const theme = useTheme()
  const movies = useMovies()


  return (
    <>
      <UserC.Provider value = { user }>
        <ThemeC.Provider value = { theme }>
          <MoviesC.Provider value = { movies }>
            <GlobalStyles />
          
            <Header />

            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/movies">
                <Movies />
              </Route>

              <Route exact path="/dashboard">
                <Dashboard />
              </Route>

            </Switch>
          </MoviesC.Provider>
        </ThemeC.Provider>
      </UserC.Provider>
    </>
  )

}



export default App
