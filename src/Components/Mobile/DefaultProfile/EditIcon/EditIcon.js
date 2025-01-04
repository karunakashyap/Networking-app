import React from 'react'

const EditIcon = ({imageUrl,funcClick}) => {
    return (
        <div style={{float:'right',marginTop:'20px',width:'20%'}}>
            <img style={{position:'sticky',top:'30px'}} src={imageUrl} onClick={funcClick}></img>

        </div>
    )
}

export default EditIcon
