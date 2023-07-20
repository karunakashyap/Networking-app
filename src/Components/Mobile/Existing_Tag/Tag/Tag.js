import React from 'react';
import styles from './Tag.module.css';
import CancelIcon from '../../../Icon/CancelIcon';
const Tag = (props) => {
    return (
        <div>

            <div className={styles.tagContent} style={{margin:'30px'}}>

                <ul className={styles.tag} style={{ width:'490px' }}>
                    <li><p className={styles.tag}>Marketing 1<img  width={25} height={25} src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 4<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Tech 5<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 2<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>IT 1<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Distribution 1<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Marketing 1<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 4<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Order 2<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Level 2<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Tech 3<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Distribution 3<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Marketing 1<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 3<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Order 1<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 2<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Order 2<img src='/cancel Icon.svg'></img></p></li>
                    <li><p className={styles.tag}>Design 6<img src='/cancel Icon.svg'></img></p></li>
                </ul>





            </div>

        </div>

    )
}
export default Tag
