import React, {useEffect,useState} from 'react'
import SettingHeader from './SettingHeader/SettingHeader'
import SettingIcon from './SettingIcon/SettingIcon'

const SettingScreen = () => {
  const [headerwidth, setHeaderwidth] = useState(0)


    useEffect(() => {

        const getMobilewidth = () => {
            const screenWidth = window.innerWidth - 40;
            setHeaderwidth(screenWidth)

        }
        window.addEventListener('resize', getMobilewidth);

        getMobilewidth();

        return () => {
            window.addEventListener('resize', getMobilewidth)
        }
    }, []);
  
  return (
    <div>
        <SettingHeader headerWidth={headerwidth} text="Setting"/>
        <SettingIcon />
      
    </div>
  )
}

export default SettingScreen
