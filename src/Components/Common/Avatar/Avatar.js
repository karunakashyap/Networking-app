import React, { useEffect, useState } from 'react';


const Avatar = () => {
    const [profileHeight, setProfileHeight] = useState(0);
    const [profileWidth, setProfileWidth] = useState(0);
  
    useEffect(() => {
  
      const getMobilewidth = () => {
        const screenWidth = window.innerWidth - 40;
      const screenHeight = screenWidth * 0.4657;
      
      setProfileHeight(screenHeight - 30)
        setProfileWidth(screenHeight-30)
      }
      window.addEventListener('resize', getMobilewidth);
  
      getMobilewidth();
  
      return () => {
        window.addEventListener('resize', getMobilewidth)
      }
    }, []);
  return (
    <div>
        <img src="https://placehold.co/300x300" alt="not show" height={profileHeight} width={profileWidth}>
        </img>
      
    </div>
  )
}

export default Avatar;
