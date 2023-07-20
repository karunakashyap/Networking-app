import React, { useState } from 'react';
import './DropDown.css'
// import { json } from 'stream/consumers';

function DropDown() {
    
    const[input,setInput] = useState("");
    const[results,setResults] = useState([])
    const[arr,setArr] = useState([]);
    const fetchData = (value) => {
        
        fetch(`https://dummyjson.com/products/search?q=${value}`).then((response)=>response.json()).then((data)=>{
            // console.log(data.products)
            setResults(data.products)
           
        })
    }
    
    const handleChange = (value) =>{
        setInput(value)
        fetchData(value)
    }
    const saveOption=(text)=>{
        console.log(text)
        
        
       
       
       
    }
    return (
        <>
            <div className="Wrapper">
                <div className="SuggDropDownInput" >
                    <input id="DropdownInput" autoComplete="off" value={input} onChange={(e)=>handleChange(e.target.value)} ></input><img src='drop down.svg'></img>
                        {/* <div class="SuggDropDown">
                            <div class="SuggInput">
                                No Suggestion
                            </div>
                        </div> */}
                </div>
            </div>
            <div>
                <div  className='allOptionRender'>
                {results.map((v,key)=>{
                    return(
                        <div className='dropdownOption' key={key}>
                           <div onClick={()=>{
                              const ar=[];
                               ar.push(v.title);
                              console.log(ar)
                            
                           }} text={v.title}>{v.title}{<img src='/check box.svg'></img>}</div>
                      </div>
                    )
                })}
                </div>
                
            </div>
        </>
    );
}

export default DropDown;

