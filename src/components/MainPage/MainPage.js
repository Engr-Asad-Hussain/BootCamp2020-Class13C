import React, { useState } from 'react';
import './MainPage.css';
import logo from '../../images/solution.gif';

function MainPage() {
    let [btn, setBtn] = useState(0);
    const message = [
        "Customized solutions to meet the needs of the changing market",
        "Innovative and intelligent technology solutions and services",
        "Scalable extended business office services"
    ];

    return (
        <div className="wrapper-main">
            <div className="main-logo">
                <img src={logo} alt="main" width="100%" height="80%" />
            </div>
            <div className="main-des">
                <div className="text">
                    <p>{message[btn]}</p>
                </div>
                <div className="nav">
                    <button onClick={
                        ()=>{ setBtn(0) }
                    }>1</button>
                    <button onClick={
                        ()=>{ setBtn(1) }
                    }>2</button>
                    <button onClick={
                        ()=>{ setBtn(2) }
                    }>3</button>
                </div>
            </div>
        </div>
    );
}
export default MainPage;
