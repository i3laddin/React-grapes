import React from 'react';
import './test.css';
 
const Test = () => {
        return (
            <div className="parent" style={{display: "flex", width:"900px", height:"500px"}}>
                <div className="chill1" style={{background: "blue", width: "50%"}}> hello this is me</div>
                <div className="chill2" style={{ background: "green", width: "50%" }} >hello this is she</div>
                <input type="text"/>
            </div>
        )
}

export default Test;
