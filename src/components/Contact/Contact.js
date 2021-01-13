import React, { useRef, useLayoutEffect } from 'react';
import useWebAnimations, { backInLeft } from '@wellyshen/use-web-animations';
import './Contact.css';


function Contact() {
    let state = useWebAnimations({ ...backInLeft });
    let ref = useRef(null);

    const handleEvent = (event)=> {
        event.preventDefault();
    }

    useLayoutEffect(()=>{
        ref.current.focus();
    });

    return (
        <div className="contact" ref={state.ref}>
            <h1>Get in Touch </h1>
            <p>Our team is ready to answer your queries</p><br/>
            <form className="form" onSubmit={handleEvent}>
                <label htmlFor="fullname">Full Name</label>
                <input
                    ref={ref}
                    required
                    id="fullname"
                    type="text"
                    placeholder="Enter your name"
                />
                <label htmlFor="phone">Phone No</label>
                <input
                    required
                    id="phone"
                    type="number"
                    placeholder="Enter phone"
                />
                <label htmlFor="email">Email address</label>
                <input
                    required
                    id="email"
                    type="text"
                    placeholder="example@surge.com"
                />
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    type="textarea"
                    placeholder="Put your message..."
                />
                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    );
}
export default Contact;