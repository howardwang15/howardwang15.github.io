import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import './style.css';
import Route from 'react-router-dom/Route';


const style = {
    position: 'relative'
};

const s = {
    position: 'fixed'
}

export default class Topbar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div class='navbar'> 
                    <NavLink to='/' exact>ABOUT ME</NavLink>
                    <NavLink to='portfolio' exact>PORTFOLIO</NavLink>
                    <NavLink to='blog' exact>BLOG</NavLink>
                </div>
            </BrowserRouter>
        );
    }
}