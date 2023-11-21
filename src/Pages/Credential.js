import React, { useState, useEffect } from 'react';
import CredentialMobile from '../Components/Mobile/Credentials/Credential';
import CredentialDesktop from '../Components/Desktop/Credentials/Credentials';
import Globalstyle from './../app/Globalstyle'

const Credential = () => {
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
      <Globalstyle />
      {isDesktop ? <CredentialDesktop /> :
        <CredentialMobile />
      }
    </div>
  )
}

export default Credential
