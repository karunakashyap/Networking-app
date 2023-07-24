import React from 'react'
import Tag from '../Tag/Tag';
import styles from './AllTag.module.css'

const AllTag = (props) => {
  console.log(props)
  return (
    <div>
      <div className={styles.heading}>
        <h1>Select Tag</h1>
      </div>
      <div>
        <div className={styles.tagContent} style={{ width: '470px', margin: '15px' }}>
          <ul className={styles.tags} style={{ display: 'inline-block' }} >
            {
              props.tags.map((item, index) => {
                
                return (
                  <Tag key={index} text={item.title} onClick={()=>{props.removeTag(index)}}></Tag>

                )
              })
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default AllTag
