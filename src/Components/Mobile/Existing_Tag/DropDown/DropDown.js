import React, { useState } from "react";
import styles from "./DropDown.module.css";
function DropDown(props) {
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const fetchData = (value) => {
        fetch(`https://dummyjson.com/products/search?q=${value}`)
            .then((response) => response.json())
            .then((data) => {

                const dumyData = [
                    {
                        "title": "Develop1",
                        "isSelected": true,
                    },
                    {
                        "title": "Developer2",
                        "isSelected": true,
                    },
                    {
                        "title": "Developer3",
                        "isSelected": true,
                    }
                ]
                if (data.products.length > 0) {
                    setResults([...dumyData, ...data.products]);
                } else {
                    setResults([
                        ...dumyData,
                        {
                            title: value,
                            isNew: true,
                        },
                    ]);
                }
            });
    };
    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };
    return (
        <>

            <div className={styles.Wrapper}>
                <div className={styles.SuggDropDownInput}>
                    <input
                        className="DropdownInput"
                        autoComplete="off"
                        value={input}
                        onChange={(e) => handleChange(e.target.value)}
                    ></input>
                    <img src="drop down.svg"></img>
                </div>
            </div>
            <div>
                <div className={styles.allOptionRender}>
                    {results.map((optionValue, key) => {

                        return (
                            <div className={styles.dropdownOption} key={key}>
                                <div
                                    onClick={() => {
                                        props.selectTagOption(optionValue);
                                    }}
                                >
                                    {optionValue.isSelected ? (
                                        <div>
                                            <span>
                                                {optionValue.title}
                                            </span>
                                            <img style={{float:'right',marginTop:'21px' }} src="golden check box.svg"></img>
                                        </div>
                                    ) : optionValue.isNew ? (
                                        <div>
                                        <p style={{ paddingLeft: '20px',paddingTop:'18px' }}>
                                            {optionValue.title}
                                            </p>
                                                <img style={{float:'right',marginTop:'-27px' }}
                                                    src="/plus add icon.svg"

                                                ></img>
                                           
                                      </div>
                                    ) : (
                                        <div>
                                        <p  style={{ paddingLeft: '20px',paddingTop:'18px' }}>
                                            {optionValue.title}
                                            </p>
                                            
                                                <img
                                                    src="/blue_checkbox.svg"
                                                    style={{float:'right',marginTop:'-27px' }}

                                                ></img>
                                            
                                            </div>
                                       
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default DropDown;
