import React, { useState } from 'react'
import Tag from './Tag/Tag'
import AllTag from './AllTag/AllTag'
import NextButton from './NextButton/NextButton'
import DropDown from './DropDown/DropDown'
import GlobalStyles from '../../../app/Globalstyle'
const Existing_tag = () => {
  return (
    <div>
      <GlobalStyles />
       <AllTag />
       <NextButton /> 
       <DropDown />
       
      
    </div>
  )
}

export default Existing_tag
