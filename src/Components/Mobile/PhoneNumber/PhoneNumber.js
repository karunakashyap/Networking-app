import React from 'react'
import PhoneData from './PhoneData/PhoneData'
import SignUpButton from '../Password/SignUpButton/SignUpButton'
const PhoneNumber = () => {
  return (
    <div>
        <PhoneData data='+783773736636'/>
        <SignUpButton btntext='Submit'></SignUpButton>
    </div>
  )
}

export default PhoneNumber
