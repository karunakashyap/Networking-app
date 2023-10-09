import styles from './SettingHeader.module.css'
const SettingHeader = (props) => {
 
  return (
    <div>
            <div className={styles.settingHeader} style={{width:props.headerWidth}} >
                <div className={styles.settingContent}>
                    <div className="grid grid-cols-2 w-32">
                        <div className="..."><img src='/back arrow icon.svg' alt='' width={30} height={30}></img> </div>
                        <div className="..."><h1>{props.text}</h1></div>
                    </div>
                </div>

            </div>

        </div>
  )
}

export default SettingHeader
