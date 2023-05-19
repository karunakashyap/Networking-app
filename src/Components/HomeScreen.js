import React from 'react';
import Sidebar from './Sidebar/Sidebar'
import Avatar from './Avatar/Avatar';
import Task from './Task/Task';
const HomeScreen = () => {
  return (
    <div>
     <Sidebar></Sidebar>
     <Avatar></Avatar>
     <Task></Task>
     </div>
    
  )
}

export default HomeScreen;
