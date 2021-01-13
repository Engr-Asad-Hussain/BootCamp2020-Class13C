import React, { useState } from 'react';
import { NavLink, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../MainPage/MainPage';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Services from '../Services/Services'
import BottomNav from '../BottomNav/BottomNav';

import './Header.css';
import logo from '../../images/brand-logo.jpeg';

function Header() {
    let [count, setCount] = useState(false);
    
    function SideMenu() {
        return (
            <ul className="side-menu">
                <li to="/about">About us</li>
                <li to="/services">Services</li>
                <li>Careers</li>
                <li to="/contact">Contact</li>
            </ul>
        );
    }
    
    return (
        <Router>
            <div className="wrapper-header">
                <div className="container-header">
                    <div className="brand"> 
                        <NavLink className="brand-name" to="/">
                            <img className="brand-logo" src={logo} alt="brand" width="40px" height="40px" />
                            SOLUTIONS PROVIDERS
                        </NavLink>
                    </div>
                    <div className="menu">
                        <ul className="items">
                            <NavLink className="menu-items" to="/about">About us</NavLink>
                            <NavLink className="menu-items" to="/services">Services</NavLink>
                            <li className="menu-items">Careers</li>
                            <NavLink className="menu-items" to="/contact">Contact</NavLink>
                        </ul>
                    </div>
                    <div className="right-btn">
                        <button onClick={
                            ()=>{ 
                                setCount( !count );
                                console.log(count);
                            }
                        }>Menu</button>
                        { count ? SideMenu() : null }
                    </div>
                </div>
            </div>

            <Switch>
                <Route exact path="/" >
                    <MainPage />
                    <About />
                    <Services />
                    <BottomNav />
                </Route>
                <Route path="/about">
                    <About />
                    <BottomNav />
                </Route>
                <Route path="/home" >
                    <MainPage />
                    <About />
                    <Services />
                    <BottomNav />
                </Route>
                <Route path="/services">
                    <Services />
                    <BottomNav />
                </Route>
                <Route path="/contact">
                    <Contact />
                    <BottomNav />
                </Route>
            </Switch>
        </Router>
    );
}
export default Header;