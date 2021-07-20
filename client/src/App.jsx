import { Route, Switch } from 'react-router-dom'

import { useTheme, ThemeC } from './theme/useTheme'
import { UserC, useUser } from './hooks/useUser'

import GlobalStyles from './theme/GlobalStyles'

import { Dashboard, Home, Movies } from './pages'
import Header from './components/Header/Header'



const App = () => {

  const user = useUser()
  const theme = useTheme()


  return (
    <>
      <UserC.Provider value = { user }>
        <ThemeC.Provider value = { theme }>
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

        </ThemeC.Provider>
      </UserC.Provider>
    </>
  )

}



export default App
