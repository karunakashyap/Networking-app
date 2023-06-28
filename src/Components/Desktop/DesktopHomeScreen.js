import React from 'react';
import Globalstyle from '../../app/Globalstyle';
import Sidebar from './Sidebar/Sidebar';
import Todo from './ToDo_Task/Todo';
import Approve_task from './Approve_Task/Approve_task';
import Assignable from './Assignable_Point_Task/Assignable';
import Point_task from './Points_Task/Point_task';
import Avatar from './Avatar/Avatar'

const DesktopHomeScreen = () => {
    return (
        <div>
            <Globalstyle></Globalstyle>
            <Avatar />
            <Sidebar></Sidebar>
            <Todo></Todo>
            <Approve_task></Approve_task>
            <Assignable></Assignable>
            <Point_task></Point_task>

        </div>
    )
}

export default DesktopHomeScreen
