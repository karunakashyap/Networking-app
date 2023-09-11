import React, { useState } from 'react'
import AllTag from './AllTag/AllTag'
import NextButton from './NextButton/NextButton'
import DropDown from './DropDown/DropDown'
import GlobalStyles from '../../../app/Globalstyle'
const Existing_tag = () => {
  const [selectedTags, setSelectedTags] = useState([
    {
      "title": "Developer1",
      "isSelected": true,
    },
    {
      "title": "Developer2",
      "isSelected": true,
    },
    {
      "title": "Developer3",
      "isSelected": true,
    }
  ]);
  const removeTag = (index) => {
    const a = [...selectedTags];
    a.splice(index, 1)
    setSelectedTags(a)



  }
  const selectTagOption = (optionValue) => {

    const tags = [
      ...selectedTags,
      {
        title: optionValue.title,
        isSelected: true
      }
    ];
    setSelectedTags(tags)
  }
  return (
    <div>
      <GlobalStyles />
      <div style={{ color: '#484848', width: '200px', fontSize: '25px', marginLeft: '190px', marginTop: '90px', fontWeight: '600' }}>
        <h1>Select Tag</h1>
      </div>
      <AllTag tags={selectedTags} removeTag={removeTag} />
      <DropDown selectTagOption={selectTagOption} />
      <NextButton />

    </div>

  )
}
export default Existing_tag
