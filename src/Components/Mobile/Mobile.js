import React from 'react'
import Avatar from '../Mobile/Avatar/Avatar'
import Footer from './Footer/Footer'
import Todo from './Todo/Todo'
import Approve from './ApproveTask/Approve'
import Point_task from './PointTask/Point_task'
import GlobalStyles from '../../app/Globalstyle'
import Assign_point from './Assignable_point/Assign_point'

const Mobile = () => {
    return (
        <div>
            <GlobalStyles />
            <Avatar  imgsrc='../../../public/Ellipse 1.svg'/>
            <Todo />
            <Approve />
            <Point_task />
            <Assign_point />
            <Footer />

        </div>
    )
}

export default Mobile
