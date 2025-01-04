import React from 'react'
import SignData from './SignData/SignData'
import SignButton from './SignButton/SignButton'
import GlobalStyles from '../../../app/Globalstyle'
import SignIcon from './SignIcon/SignIcon'

const SignIn = () => {
  return (
    <div>
        <GlobalStyles />
        <SignData />
        <SignButton />
        <SignIcon/>
      
    </div>
  )
}

export default SignIn
