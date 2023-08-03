import React from 'react'
import SignUpButton from '../../Password/SignUpButton/SignUpButton'

const NextButton = () => {
  return (
    <div>
      <div style={{marginLeft:'95px',marginTop:'-20px'}}>
        <h1 style={{ color: '#353D48',width:'220px', fontFamily: 'Inter', fontSize: '14px', fontWeight: '400', marginTop: '320px' }}>
          Already have an account <span style={{color: '#2B8CA7',fontWeight:'700',fontSize:'14px'}}>Sign In</span> </h1>
      </div>
      <div style={{ marginTop: '-440px' }}>
        <SignUpButton btntext="Next" />
      </div>
    </div>
  )
}

export default NextButton
