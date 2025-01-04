import React from 'react';
import styles from './RecentSearch.module.css'

const RecentSearch = () => {
    const recentSearchData =['Take a survery','Mayank joshi','karuna kashyap']
  return (
    <div>
        <div className={styles.allSearchContent}>
            <h1>Recently searched</h1>
            <div className={styles.searchHistory}>
                {recentSearchData.map((value,index)=>{
                   return (
                    <div key={index}><p>{value}</p></div>
                   )
                })}
            </div>
        </div>
      
    </div>
  )
}

export default RecentSearch
