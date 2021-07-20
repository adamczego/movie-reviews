import styled from 'styled-components'
import { User } from '../../hooks/useUser'



const Header = () => {

  const {
    userData, loginLink, isLoggedIn, logout, 
  } = User()

  return (
    <HeaderWrapper>

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



    </HeaderWrapper>
  )

}


const HeaderWrapper = styled.div`
  display: flex;
  margin: 2rem;
  align-content: center;
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
