import React from 'react';
import useWebAnimations from '@wellyshen/use-web-animations';
import logo1 from '../../images/about1.png';
import logo2 from '../../images/about2.svg';
import './About.css';

function About() {
    let state1 = useWebAnimations({
        keyframes: [
            { transform: 'rotate(180deg)' }
        ],
        timing: {
            duration: 1000,
            iterations: Infinity
        }
    });

    return (
        <div className="wrapper-about">
            <h1 id="about">About Us</h1>
            <div className="about">
                <div className="about-logo">
                    <img id="logo1" src={logo2} alt="logo1" width="50%" height="50%" />
                    <img id="logo2" src={logo1} alt="logo2" width="65%" height="65%" />
                    <img id="logo3" src={logo2} alt="logo3" width="50%" height="50%" />
                    <div id="block4" ref={state1.ref}></div>
                </div>
                <div className="about-des">
                    <p>
                        Solution Providers works with Hospitals, Physician 
                        groups, Financial institutions, Clearing houses and 
                        Billing agencies to streamline, scale and improve their 
                        healthcare payment processing by efficiently deploying 
                        an array of intelligent technologies, staffing and 
                        business process management solutions.
                        <br/><br/>
                        With an innovative and automated approach, we smoothen
                        the workflow to accelerate the growth of the organization
                        by utilizing minimal resources.
                    </p>
                </div>
            </div>
        </div>
    );
}
export default About;