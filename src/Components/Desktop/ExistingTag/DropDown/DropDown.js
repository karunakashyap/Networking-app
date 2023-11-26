import React,{useState} from 'react';
import styles from './DropDown.module.css'

const DropDown = (props) => {
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
                                            <span style={{position:'relative',top:'6px'}}>
                                                {optionValue.title}
                                            </span>
                                            <img width={25} height={25} style={{ float: 'right' ,position:'relative',top:'29px',right:'10px'}} src="golden check box.svg"></img>
                                        </div>
                                    ) : optionValue.isNew ? (
                                        <div>
                                            <p style={{paddingLeft:'20px',paddingTop:'5px'}}>
                                                {optionValue.title}
                                            </p>
                                            <img style={{ float: 'right',position:'relative',right:'10px',top:'-5px'}}
                                                src="/plus add icon.svg"

                                            ></img>

                                        </div>
                                    ) : (
                                        <div>
                                            <p style={{paddingLeft:'20px',paddingTop:'5px'}}>
                                                {optionValue.title}
                                            </p>

                                            <img
                                                src="/blue_checkbox.svg"
                                                style={{ float: 'right',paddingRight:'10px',position:'relative',top:'-4px'}}

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
    )
}

export default DropDown

