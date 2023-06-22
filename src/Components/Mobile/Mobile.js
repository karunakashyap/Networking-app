import React from 'react'
import Avatar from '../Mobile/Avatar/Avatar'
import Footer from './Footer/Footer'
import Todo from './Todo/Todo'
import Approve from './ApproveTask/Approve'

const Mobile = () => {
    return (
        <div>
            <Avatar />
            <Todo />
            <Approve />
            <Footer />

        </div>
    )
}

export default Mobile
