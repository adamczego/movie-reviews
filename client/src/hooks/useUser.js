import {
  useState, useEffect, createContext, useContext, 
} from 'react'
import { useHistory } from 'react-router-dom'
import ck from 'js-cookie'
import jwtDecode from 'jwt-decode'

import useFetch from './useFetch'



const useUser = () => {

  // const h = useHistory()
  useHistory()

  const [ userData, setUserData ] = useState()
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)

  const [ loginLink, setLoginLink ] = useState('')

  const { doFetch } = useFetch()


  const getLoginLink = async () => {

    const link = await doFetch({
      endpoint: '/api/auth/g_login_link',
      method: 'GET',
    })

    setLoginLink(link.gLoginLink)

  }

  const login = (idt) => {
    setUserData(jwtDecode(idt))
    setIsLoggedIn(true)
  }

  const logout = () => {
    ck.remove('idt')
    setIsLoggedIn(null)
    setUserData(null)
  }


  useEffect(() => {

    const idt = ck.get('idt')

    if (idt) {
      login(idt)
    }

    if ( !idt ) {
      // logout()
      getLoginLink()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  return {
    userData,
    isLoggedIn,
    loginLink,
    logout,
  }

}


const UserC = createContext(null)

const User = () => useContext(UserC)



export {
  useUser,
  UserC,
  User,
}
