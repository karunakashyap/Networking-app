import React from 'react'
import PasswordData from '../Password/PasswordData/PasswordData'
import SignUpButton from '../Password/SignUpButton/SignUpButton'

const NewPassword = () => {
  return (
    <div>
      <PasswordData pwd='New Password' retypepwd="Re-type New Password"></PasswordData>
      <SignUpButton btntext='Confirm'></SignUpButton>
    </div>
  )
}

export default NewPassword
