import React, {useState} from 'react'
import MemberListFooter from '../MemberList/MemberListFooter/MemberListFooter'
import TodoHeader from './TodoHeader/TodoHeader'
import TodoContent from './TodoContent/TodoContent'
import GlobalStyles from '../../../app/Globalstyle'
import AssignTask from '../../AssignTask/AssignTask'

const TodoScreen = () => {
  const [plusDublicateIcon,setPlusDublicateIcon]=useState('/plus-duplicate.svg');
  const [invite,setInvite]=useState('/invite-white-icon.svg');
  const [AssignTaskScreen,setAssignTaskScreen] = useState(false)
    const plusDublicate=()=>{
         setPlusDublicateIcon('/plus-dublicate-blue.svg')
         setInvite('invite-white-icon.svg')
    }
    const Invite=()=>{
        setInvite('/invite-blue-icon.svg')
        setPlusDublicateIcon('/plus-duplicate.svg')
        setAssignTaskScreen(true)
    }

  return (
    <div >
       <GlobalStyles />
      {AssignTaskScreen?(
        <AssignTask/>
      ):
      (
        <div>
     
      <TodoHeader />
      <TodoContent  Invite={Invite} plusDublicate={plusDublicate} plusDublicateIcon={plusDublicateIcon} invite={invite}/>
      <MemberListFooter />
      </div>
      )
}
    </div>
  )
}

export default TodoScreen
