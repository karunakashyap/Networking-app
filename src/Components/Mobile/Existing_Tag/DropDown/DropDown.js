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
                        "title": "Developer1",
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
                        id="DropdownInput"
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
                                        <p>
                                            {optionValue.title}
                                            {<img style={{ marginLeft: '310px', marginTop: '-26px' }} src="golden check box.svg"></img>}
                                        </p>
                                    ) : optionValue.isNew ? (
                                        <p>
                                            {optionValue.title}
                                            {
                                                <img
                                                    style={{ marginLeft: "310px", marginTop: "-26px" }}
                                                    src="/plus add icon.svg"
                                                ></img>
                                            }
                                        </p>
                                    ) : (
                                        <p>
                                            {optionValue.title}
                                            {
                                                <img
                                                    style={{ marginLeft: "310px", marginTop: "-23px" }}
                                                    src="/blue_checkbox.svg"
                                                ></img>
                                            }
                                        </p>
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
