import React, { useState, useEffect } from 'react'
import MobileHomeScreen from '../Components/Mobile/HomeScreenHeader/MobileHomeScreen';
import DesktopHomeScreen from '../Components/Desktop/DesktopHomeScreen'
import GlobalStyles from '../app/Globalstyle';
const ResponsiveScreen = () => {
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
      {isDesktop ? (
        <DesktopHomeScreen />
      ) : (
        <MobileHomeScreen />
      )}
    </div>
  );
};
export default ResponsiveScreen;
