import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Todo from './ToDo_Task/Todo';
import Approve_task from './Approve_Task/Approve_task';
import Assignable from './Assignable_Point_Task/Assignable';
import Point_task from './Points_Task/Point_task';
import HomeScreenHeader from './HomeScreenHeader/HomeScreenHeader';

const DesktopHomeScreen = () => {
    const [showTodo,setShowTodo]= useState(true);
    const [showaprrove,setShowApprove]=useState(true);
    const [chatScreen,setChatScreen]=useState(false);
    const [homeHeaderData,setHomeHeaderData]=useState(true);
    const [headerWidth,setHeaderWidth]=useState('960px');
    const [leftmargin,setLeftMargin]=useState('');
    const [topMargin,setTopMargin]=useState('')

    const hideComponent=()=>{
        setShowTodo(false);
        setShowApprove(false)
        setChatScreen(true)
        setHomeHeaderData(false)
        setHeaderWidth('422px')
        setLeftMargin('100px');
        setTopMargin('620px')
    }
    return (
        <div >
            <Sidebar hideComponent={hideComponent} chatScreen={chatScreen}></Sidebar >
            <HomeScreenHeader homeHeaderData={homeHeaderData} headerWidth={headerWidth}/>
            <div style={{marginTop:'-40px'}}>
            {showTodo&&<Todo></Todo>}
            {showaprrove&&<Approve_task></Approve_task>}
            <div style={{marginTop:topMargin,marginLeft:leftmargin}}>
            <Assignable></Assignable>
            <Point_task></Point_task>
            </div>
            </div>

        </div>
    )
}

export default DesktopHomeScreen
