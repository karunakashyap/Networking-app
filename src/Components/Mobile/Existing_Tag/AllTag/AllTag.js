import React from 'react'
import Tag from '../Tag/Tag';
import styles from './AllTag.module.css';
const AllTag = (props) => {
  return (
    <div>
      <div>
        <div className={styles.tagContent} style={{ margin: '15px' }}>
          <ul className={styles.tags} style={{ display: 'inline-block' }}>
            {
              props.tags.map((item, index) => {
                return (
                  <Tag  key={index} text={item.title} remove={props.removeTag} i={index}></Tag>
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
