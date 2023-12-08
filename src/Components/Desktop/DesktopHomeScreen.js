import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Todo from './ToDo_Task/Todo';
import Approve_task from './Approve_Task/Approve_task';
import Assignable from './Assignable_Point_Task/Assignable';
import Point_task from './Points_Task/Point_task';
import HomeScreenHeader from './HomeScreenHeader/HomeScreenHeader';

const DesktopHomeScreen = () => {
    return (
        <div>
            <HomeScreenHeader />
            <Sidebar></Sidebar>
            <div style={{marginTop:'-40px'}}>
            <Todo></Todo>
            <Approve_task></Approve_task>
            <Assignable></Assignable>
            <Point_task></Point_task>
            </div>

        </div>
    )
}

export default DesktopHomeScreen
