import React, { useState, useEffect } from 'react'
import Mobile from './Mobile/Mobile';
import Desktop from './Desktop/DesktopHomeScreen'


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
          {isDesktop ? (
            <Desktop />
          ) : (
            <Mobile />
          )}
        </div>
      );
    
};

export default ResponsiveScreen;
