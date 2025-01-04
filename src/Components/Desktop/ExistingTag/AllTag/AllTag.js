import React from 'react';
import styles from './AllTag.module.css'
import Tag from '../Tag/Tag';

const AllTag = (props) => {
  return (
    <div>
      <div>
        <div className={styles.tagContent}>
          <ul className={styles.tags}>
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
