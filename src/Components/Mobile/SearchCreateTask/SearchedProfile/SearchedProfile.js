import React from 'react';
import styles from './SearchedProfile.module.css'

const SearchedProfile = ({query}) => {
    const data = [
        'karuna kashyap',
        'Rishika',
        'Piyush Kumar',
      ];
    
      const filteredData = data.filter(item =>
        item.includes(query)
      );
    return (
        <ul>
        {filteredData.map((item, index) => (
            <div className={styles.profileContent} key={index}>
                     <img src='/search-profile-picture.svg'></img>
                     <div className={styles.profileData}>
                         <h1>{item}</h1>
                         <p>Selaqui</p>
                         <div className={styles.supplyButton}>
                             <button>Supply</button>
                             <button>Supply</button>
                             <button>Supply</button>
                         </div>
                     </div>
                 </div>
        ))}
      </ul>
    )
}

export default SearchedProfile
