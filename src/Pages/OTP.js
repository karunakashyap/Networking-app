import React,{useState, useEffect} from 'react';
import OTPMobileScreen from './../Components/Mobile/OTP/OTP';
import OTPDeskTopScreen from '../Components/Desktop/OTP/OTP';
import Globalstyle from './../app/Globalstyle'

const OTP = () => {
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
        <Globalstyle></Globalstyle>
        {isDesktop?
        <OTPDeskTopScreen></OTPDeskTopScreen>
        :<OTPMobileScreen></OTPMobileScreen>}
       
      
    </div>
  )
}

export default OTP
