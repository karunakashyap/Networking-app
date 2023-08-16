import React, { useState } from 'react'
import CredentialData from './CredentialData/CredentialData'
import NextButton from './NextButton/NextButton'
import CountryData from './CountryData/CountryData'
import styles from './Credential.module.css';
const Credential = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [codevalue, SetCodeValue] = useState('+91');

  const showOverlay = () => {
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
  };
  const getValue = (countrycode) => {
    SetCodeValue(countrycode.code)
    setOverlayVisible(false)
  }
  return (
    <div>
      <CredentialData showOverlay={showOverlay} code={codevalue} />
      <NextButton showOverlay={showOverlay} />
      {overlayVisible && (
        <div >
          <div className={styles.overlay} >
            <div className={styles.text}>
              <CountryData hideOverlay={hideOverlay} getValue={getValue} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Credential
