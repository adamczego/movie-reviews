import {
  createContext, useContext, useEffect, useState, 
} from 'react'
import daggy from 'daggy'

import useWindowSize from '../hooks/useWindowSize'



const Size = daggy.taggedSum('Size', {
  S: [ ],
  M: [ ],
  L: [ ],
  def: [ ],
})


const useTheme = () => {

  const windowSize = useWindowSize()

  const [ currentBaseSize, setCurrentBaseSize ] = useState(Size.def)


  useEffect(() => {

    if ( windowSize.width > 860 ) setCurrentBaseSize(Size.L)
    if ( windowSize.width < 860 ) setCurrentBaseSize(Size.M)
    if ( windowSize.width < 640 ) setCurrentBaseSize(Size.S)

  }, [ windowSize ])

  return {
    windowSize,
    baseSize: currentBaseSize.cata({
      S: () => 5,
      M: () => 6,
      L: () => 8,
      def: () => null,
    }),
  }
}


const ThemeC = createContext(null)

const Theme = () => useContext(ThemeC)



export {
  useTheme,
  ThemeC,
  Theme,
}
