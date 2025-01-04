import React,{useState,useEffect} from 'react'
import GlobalStyles from '../app/Globalstyle'
import SignInMobile from '../Components/Mobile/SignIn/SignIn'
import SignInDesktop from '../Components/Desktop/SignIn/SignIn'

const Signin = () => {
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
        <GlobalStyles></GlobalStyles>
        {isDesktop?(
          <SignInDesktop/>
        ):
        <SignInMobile/> 
}     
    </div>
  )
}

export default Signin
