import React from 'react';
import styles from './UserNotifi.module.css'

const UserNotifi = () => {
    return (
        <div className={styles.allNotification}>
            <ul>
            <div style={{marginLeft:'525px',marginTop:'210px'}}>
            
                    <li>
                       <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Surbhi Kandwal assigned you a task</h1></div>
                        </div>  
                    </li>
                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>You received 100 redeemable Points</h1></div>
                        </div> 
                    </li>                
                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Mayank assigned you a task of placing an order</h1></div>
                        </div> 
                    </li>                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Amrita Rawat completed a task of making a report</h1></div>
                        </div> 
                    </li>                
                    <li>
                        <div className="grid grid-cols-2">
                            <div className="..."><img src='/Ellipse 2.svg' width={75} height={75}></img></div>
                            <div className="..."><h1>Abhishek Dennis Pawson assigned you a task</h1></div>
                        </div> 
                    </li>                
                    
            </div>
</ul>
        </div>
    )
}

export default UserNotifi
