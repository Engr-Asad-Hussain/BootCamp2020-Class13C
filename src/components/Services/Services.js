import React from 'react';
import logo1 from '../../images/web-development.png';
import logo2 from '../../images/devops.jpeg';
import logo3 from '../../images/design.jpeg';
import './Services.css';

function Services() {
    const services = [
        [logo1, "Project Development", "Our team of specialist individuals will take care of your projects from the requirement gathering phase to project deployment and further providing post-implementation services."],
        [logo2, "DevOps & Infrastucture", "Cloud infrastructure management, maintenance and monitoring is very critical for all types of system and business, so we are here to takes away the complexities of setting up your systems on cloud"],
        [logo3, "Design", "The user interface or user experience of an application plays an important role in the overall experience it offers. We believe that everything which affects an end user is part of the design process."]
    ]
    return (
        <div className="wrapper-services">
            <h1>Services</h1>
            <div className="service-items">
            {services.map((obj, ind) => {
                return (
                    <div className="flip-wrap" key={ind}>
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <h2>{obj[1]}</h2>
                                    <img src={obj[0]} alt="service" />
                                </div>
                                <div class="flip-card-back">
                                    <h1>{obj[1]}</h1>
                                    <p>{obj[2]}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
            </div>
        </div>
    );
}
export default Services;