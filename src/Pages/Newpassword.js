import React,{useState,useEffect} from 'react'
import NewPasswordMobile from '../Components/Mobile/NewPassword/NewPassword';
import NewPasswordDesktop from '../Components/Desktop/NewPassword/NewPassword';
import GlobalStyles from '../app/Globalstyle';

const Newpassword = () => {
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
      <GlobalStyles/>
        {isDesktop?(<NewPasswordDesktop/>):(<NewPasswordMobile/>)}
    </div>
  )
}

export default Newpassword
