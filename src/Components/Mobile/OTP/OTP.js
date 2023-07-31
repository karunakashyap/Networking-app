import React, { useState } from 'react'
import OTPNumber from './OTPNumber/OTPNumber'
import OTPLoader from './OTPLoader/OTPLoader';
import SignUpButton from './../Password/SignUpButton/SignUpButton';
const OTP = () => {
  return (
    <div>
      <OTPNumber length={6} />
      <OTPLoader />
      <div style={{ marginTop: '-200px' }}>
        <SignUpButton btntext='Submit' />
      </div>
    </div>
  )
}

export default OTP
