import React, { useState, useEffect } from "react";
import styles from "./NextButton.module.css";

const NextButton = () => {
  const [nextButtonWidth, setNextButtonWidth] = useState(0);
  useEffect(() => {
    const handleFooterSize = () => {
      const screenWidth = window.innerWidth - 80;
      setNextButtonWidth(screenWidth);
    };
    handleFooterSize();
    window.addEventListener("resize", handleFooterSize);
    return () => {
      window.removeEventListener("resize", handleFooterSize);
    };
  }, []);
  return (
    <>
      <div className={styles.nextButton}>
        <button style={{ width: nextButtonWidth }}>Next</button>
      </div>
      <div style={{ marginBottom: "50px" }}></div>
    </>
  );
};

export default NextButton;
