import React from 'react';
import styles from './SignIcon.module.css'

const SignIcon = () => {
  return (
    <div className={styles.allIcon}>
      <div className="grid grid-cols-2 w-24">
        <div className="...">
          <div className={styles.facebookIcon}>
            <button>
              <img src='/facebook-icon.svg'></img>
            </button>
          </div>
        </div>
        <div className="...">
          <div className={styles.googleIcon}>
            <button>
              <img src='/google-icon.svg'></img>
            </button>
          </div>
        </div>

      </div>


    </div>
  )
}

export default SignIcon
