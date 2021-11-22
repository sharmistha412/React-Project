import React, {useState} from 'react'
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const onClick=(e)=>{
        setText(text.toUpperCase());
        props.showAlert("Text changed to UpperCase","success");
    }
    const onChange=(e)=>{
        console.log("TextChanged")
        const a=(e.target.value);
        setText(a);
    }
    const onClick1=()=>{
        setText(text.toLowerCase());
        props.showAlert("Text changed to Lowercase","success");
    }
    const onClick2=()=>{
        setText("");
    }
    const solve=(word)=>{
        if(word===""){
            return 0;
        }
        const arr=word;
        let count=0;
        for(let i=0;i<arr.length;i++){
            if(arr.charAt(i)==' '){
                count++;
            }
        }
        return count;
    }
    const [text,setText]=useState("Enter your text :");
    return (
        
        <div className="container mb-3" style={{color:props.mode ==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="my_box" className="form-label">Example textarea</label>
                <textarea className="form-control" onChange={onChange} style={{backgroundColor:props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'black'}} value={text} id="my_box" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={onClick}>Covert to UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={onClick1}>Covert to LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={onClick2}>Clear Text</button>
            <h1>Summary</h1>
            <h6>{solve(text)} words and {text.length} characters</h6>
            <h6>{Math.round(text.split(" ").length * (1/125))} mins reqd to word</h6>
            <h1>Preview</h1>
            <h6>{text}</h6>
        </div>
    )
}
