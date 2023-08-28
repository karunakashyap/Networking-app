import styles from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <div className={styles.allProfileData}>
        <div className={styles.imageSelect}>
          <img src="default-dp.svg"></img>
          <input type="file" />
        </div>
      </div>
    </div>
  )
}

export default Profile
