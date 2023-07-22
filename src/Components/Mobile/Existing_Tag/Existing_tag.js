import React, { useState } from 'react'
import AllTag from './AllTag/AllTag'
import NextButton from './NextButton/NextButton'
import DropDown from './DropDown/DropDown'
import GlobalStyles from '../../../app/Globalstyle'
const Existing_tag = () => {

  const [selectedTags, setSelectedTags] = useState(['Marketing 1', 'Marketing 1', 'Marketing 1', 'Design 2', 'Marketing 1', 'Distribution', 'Marketing', 'Design 4', 'Marketing',
    'Distribution', 'Marketing 1', 'Design 4', 'Design 4', 'Marketing']);
  const getOptionValue = (optionValue) => {
    const tag = selectedTags;
    tag.push(optionValue.title)
    console.log(tag)
    // setSelectedTags(tag)
  }
  return (
    <div>
      <GlobalStyles />
      <AllTag text={selectedTags} />
      <NextButton />
      <DropDown getOptionValue={getOptionValue} />
    </div>
  )
}
export default Existing_tag
