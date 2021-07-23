import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { User } from '../../hooks/useUser'



const Header = () => {

  const {
    userData, loginLink, isLoggedIn, logout, 
  } = User()

  return (
    <HeaderWrapper>

      <Info>

        <Logo>
          Movie review app
        </Logo>
 
        <UserInfo>

          <UserNameDisplay>{ userData?.name }</UserNameDisplay>
          <UserImageDisplay src = { userData?.picture } />

        </UserInfo>

        <LogInOutButton onClick = { logout }>
          {
          isLoggedIn ? 'logout' : <a href = { loginLink }>login</a>
        }
        </LogInOutButton>

      </Info>

      <Nav>
        <NavLink>
          <Link to = "/movies">movies</Link>
        </NavLink>
        <NavLink>
          <Link to = "/reviews">reviews</Link>
        </NavLink>
      </Nav>

    </HeaderWrapper>
  )

}


const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  //align-content: center;
`

const Nav = styled.nav`
  margin-top: 4rem;
`

const NavLink = styled.span`
  font-size: 3.5rem;
  font-weight: 400;
  margin-right: 1.5rem;
`

const Info = styled.div`
  display: flex;
  align-items: center;
`

const Logo = styled.span`
  font-size: 4rem;
  font-weight: 900;
`

const UserInfo = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`

const UserNameDisplay = styled.span`
  font-size: 4rem;
  font-weight: 500;
`

const UserImageDisplay = styled.img`
  max-width: 4rem;
  height: auto;
  margin-left: 2rem;
  border-radius: 50%;
`

const LogInOutButton = styled.button`
  font-size: 3rem;
  margin-left: 4rem;
  font-weight: 900;
  color: azure;
  background: #ff5e5e;
  border-radius: 1rem;
  padding: 1rem 2rem;
  cursor: pointer;
`

export default Header
