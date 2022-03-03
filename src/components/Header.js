import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Fade } from 'react-reveal';
// import Fade from 'react-reveal/Fade'

function Header() {
    const [burgerStatus, setburgerStatus] = useState(false);


    function changeStatus() {
        if (burgerStatus) {
            document.getElementById("burger-bar").style.display = "none";
            document.getElementById("bar-btn").style.opacity = "1"
            setburgerStatus(false);
        } else {
            document.getElementById("burger-bar").style.display = "flex";
            document.getElementById("bar-btn").style.opacity = "0"
            setburgerStatus(true);
        }
    }
    return (
        <div id="header-container">


            <a href=".">
                <div className="logo"></div>
            </a>

            <div id="menu-container">
                <a href="." alt="/">Model S</a>
                <a href="." alt="/">Model 3</a>
                <a href="." alt="/">Model Y</a>
                <a href="." alt="/">Model X</a>
            </div>

            <div id="right-menu">
                <a href="/">
                    Shop
                </a>
                <a href="/">
                    Account
                </a>

                <FontAwesomeIcon icon={faBars} onClick={changeStatus} id="bar-btn"></FontAwesomeIcon>

            </div>
            <Fade >
            <div id="burger-bar" className="burger-nav">
                <div className="close-wrapper">
                    <div className="close">
                        <FontAwesomeIcon icon={faClose} onClick={changeStatus} id="close-btn"></FontAwesomeIcon>
                    </div>
                </div>
                <li><a href="/"><span>Model S</span></a></li>
                <li><a href="/"><span>Model Y</span></a></li>
                <li><a href="/"><span>Model 3</span></a></li>
                <li><a href="/"><span>Model X</span></a></li>
                <li><a href="/"><span>Existing Inventory</span></a></li>
                <li><a href="/"><span>Used Inventory</span></a></li>
                <li><a href="/"><span>Trade-in</span></a></li>
                <li><a href="/"><span>Cybertruck</span></a></li>
                <li><a href="/"><span>Roadaster</span></a></li>
                <li><a href="/"><span>Semi</span></a></li>
                <li><a href="/"><span>Charging</span></a></li>
                <li><a href="/"><span>Power</span></a></li>
            </div>
           </Fade>
        </div>
    )
}

export default Header