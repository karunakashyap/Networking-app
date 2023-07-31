import React from 'react'
import PasswordData from './PasswordData/PasswordData'
import SignUpButton from './SignUpButton/SignUpButton'

const Password = () => {
  return (
    <div>
      <PasswordData pwd='Password' retypepwd="Re-type Password" />
      <SignUpButton btntext="SignUp" />
    </div>
  )
}

export default Password
