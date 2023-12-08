import React, { useState, useEffect } from 'react'
import Existing_tag_Mobile from '../Components/Mobile/Existing_Tag/Existing_tag';
import ExistingTagDesktop from '../Components/Desktop/ExistingTag/ExistingTag';
import GlobalStyles from '../app/Globalstyle';
const ExistingTag = () => {

  const [isDesktop, setIsDesktop] = useState();
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 940);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (

    <div>
      <GlobalStyles />
      {isDesktop ? <ExistingTagDesktop /> :
        <Existing_tag_Mobile />
      }
    </div >
  )
}
export default ExistingTag
