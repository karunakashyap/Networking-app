import React from 'react';
import styles from './Page404.module.css'
import ContactUs from './ContactUs/ContactUs';

const Page404 = () => {
    return (
        <div>
            <div className={styles.allData}>
                <div className="grid grid-cols-2">
                    <div className="...">
                        <img src='/page404.svg'></img>
                    </div>
                    <div className="...">
                        <div className={styles.notFoundContent}>
                            <h1>Page Not Found</h1>
                            <p>Oops! you’re looking for <br></br>
                                a page that do not exist</p>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '150px' }}>
                                <ContactUs />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Page404
