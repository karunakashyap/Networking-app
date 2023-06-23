import React from 'react'
import Avatar from '../Mobile/Avatar/Avatar'
import Footer from './Footer/Footer'
import Todo from './Todo/Todo'
import Approve from './ApproveTask/Approve'
import Point_task from './PointTask/Point_task'
import GlobalStyles from '../../app/Globalstyle'

const Mobile = () => {
    return (
        <div>
            <GlobalStyles />
            <Avatar />
            <Todo />
            <Approve />
            <Point_task />
            <Footer />

        </div>
    )
}

export default Mobile
