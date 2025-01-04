import React, { useState } from 'react';
import styles from './SearchBar.module.css'
import SearchedProfile from '../SearchedProfile/SearchedProfile';
const SearchBar = ({inputValue,getvalue}) => {
    return (
        <div style={{ margin: '10px' }}>
            <div className={styles.searchbar}>
                <img src="/back-arrow-icon-blue.svg" alt="Back" className={styles.backarrow} width={30} height={30} />
                <input type="text" className={styles.searchinput} value={inputValue}
                    onChange={(e) =>{getvalue(e.target.value)}} />

                <img src="/search-icon-blue.svg" alt="Search" className={styles.searchicon} width={30} height={30} />
            </div>
        </div>
    )
}


export default SearchBar
