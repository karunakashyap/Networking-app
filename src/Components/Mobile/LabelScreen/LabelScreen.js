import React, { useState } from 'react'
import ProfileName from './ProfileName/ProfileName'
import AllTag from '../Existing_Tag/AllTag/AllTag';
import DropDown from '../Existing_Tag/DropDown/DropDown';
import NextButton from '../Existing_Tag/NextButton/NextButton';
const LabelScreen = () => {
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
      <ProfileName />
      <div style={{marginTop:'60px'}}>
        <AllTag tags={selectedTags} removeTag={removeTag} />
        <DropDown selectTagOption={selectTagOption} />
        <NextButton />
      </div>
    </div>
  )
}

export default LabelScreen
