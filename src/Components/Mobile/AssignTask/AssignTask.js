import React from 'react';
import NotificationHeader from '../Notification/NotificationHeader/NotificationHeader'
import MemberListFooter from '../MemberList/MemberListFooter/MemberListFooter';
import CheckBox from './CheckBox/CheckBox';
import { useState } from 'react';
import AssignTaskMember from './AssignTaskMember/AssignTaskMember';

const AssignTask = () => {
   
  const [bottom,setBottom]=useState('40px')

  return (
    <div>
       <NotificationHeader text="Assign Task to"  />
       <AssignTaskMember/>
       <MemberListFooter  CheckBox={<CheckBox/>} bottom={bottom}/>
    </div>
  )
}

export default AssignTask
