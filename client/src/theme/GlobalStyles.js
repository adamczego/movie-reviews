import { createGlobalStyle, css } from 'styled-components'
import { normalize } from 'styled-normalize'
import { reset } from 'styled-reset'
import { Theme } from './useTheme'


const GlobalStyles = () => {

  const theme = Theme()


  return (
    <>
      <GlobalStyle baseSize = { `${theme.baseSize}px` } />
    </>
  )

}

const Reset = css`
  ${reset}
  ${normalize}
  
  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;

    background: transparent;

    /* inherit font & color from ancestor */
    color: inherit;
    font: inherit;

    /* Normalize \`line-height\`. Cannot be changed from \`normal\` in Firefox 4+. */
    line-height: normal;

    /* Corrects font smoothing for webkit */
    -webkit-font-smoothing: inherit;
    -moz-osx-font-smoothing: inherit;

    /* Corrects inability to style clickable \`input\` types in iOS */
    -webkit-appearance: none;
  }

  a, a:hover, a:focus, a:active {
    text-decoration: none;
    color: inherit;
  }
`

const GlobalStyle = createGlobalStyle`
  ${Reset}
  
  html {
    font-size: ${({ baseSize }) => baseSize && baseSize};
    font-family: 'Helvetica Neue', serif;
  }
`


export default GlobalStyles
