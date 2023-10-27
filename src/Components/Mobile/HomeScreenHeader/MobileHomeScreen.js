import React, { useState } from 'react';
import HomeScreenHeader from './HomeHeader/HomeScreenHeader';
import Footer from '../Footer/Footer'
import Todo from '../Todo/Todo'
import Approve from '../ApproveTask/Approve'
import Point_task from '../PointTask/Point_task'
import GlobalStyles from '../../../app/Globalstyle'
import Assign_point from '../Assignable_point/Assign_point'
import styles from './MobileHomeScreen.module.css'
import Avatar from '../../Common/Avatar/Avatar';
import HomeScreenAllTasks from './HomeScreenAllTasks/HomeScreenAllTasks';

const Mobile = () => {
    const [data, setData] = useState(styles.showData);
    const [networkScreen, setNetworkScreen] = useState(styles.hideData)
    const [taskcolor,setTaskColor]=useState();
    const [taskIcon,setTaskIcon]=useState('/task.svg');
    const [opacity,setOpacity]=useState('1')
    const [showTasks,setShowTasks]=useState(false)
    const manageheader = () => {
        setData(styles.hideData)
        setNetworkScreen(styles.showData)
    }
    const handleChild = (e) => {
        e.preventDefault();
        setData(styles.showData)
        setNetworkScreen(styles.hideData)
    }
    const changeTaskColor=()=>{
        setTaskColor('#FFF')
        setTaskIcon('/task-white-icon.svg')
        setOpacity('0.3')
        setShowTasks(true)
    }
    return (
        <>
            <div>
                <GlobalStyles />
                <div className={data}>
                    <div  >
                        <HomeScreenHeader onClick={manageheader} />
                    </div>
                    <Todo />
                    <Approve />
                    <Point_task />
                    <Assign_point />
                    <Footer />
                </div>
            </div>
            <div >
                < div className={networkScreen} style={{opacity:opacity}}>
                <div style={{width:'10%',height:'100vh'}} onClick={handleChild}></div>
                <div className={styles.innerdiv}>
                        <div className={styles.animate}>
                            <div className={styles.avatarData}>
                                <div className={styles.avatarDataImg}>
                                    <div className="grid grid-cols-2">
                                        <div className="...">
                                            <Avatar />
                                        </div>
                                        <div className="...">
                                            <h2>Kapil <br></br> Sharma</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h1 style={{ marginTop: '60px', marginLeft: '40px', color: '#FFF', fontSize: '20px', fontWeight: '500' }}>My Network</h1>
                                <ul className={styles.allListData} >
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                Create Task

                                            </div>
                                            <img src='/create icon (1).svg'></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div style={{color:taskcolor}} onClick={changeTaskColor}>
                                                Task

                                            </div>
                                            <img src={taskIcon}></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                My Points

                                            </div>
                                            <img src='/dollar-icon3.svg'></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                Notification

                                            </div>
                                            <img src='/bell-icon.svg'></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                Members

                                            </div>
                                            <img src='/group-icon.svg'></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                Chatrooms

                                            </div>
                                            <img src='/chat-icon.svg'></img>
                                        </div>

                                    </li>
                                    <li className={styles.menulist}   >
                                        <div className={styles.menuDiv} >
                                            <div >
                                                Setting

                                            </div>
                                            <img src='/setting.svg' />
                                        </div>

                                    </li>

                                </ul>

                            </div>
                        </div>

                    </div>
                    {showTasks && <HomeScreenAllTasks/>}

                </div>
            </div>
        </>
    )

}

export default Mobile
