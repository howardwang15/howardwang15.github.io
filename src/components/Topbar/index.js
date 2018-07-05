import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from '../Homepage';
import Blog from '../Blog';
import Portfolio from '../Portfolio';
import './style.css';

export default class Topbar extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className='navbar'> 
                        <NavLink to='/' exact>ABOUT ME</NavLink>
                        <NavLink to='/portfolio' exact>PORTFOLIO</NavLink>
                        <NavLink to='/blog' exact>BLOG</NavLink>
                    </div>
                    <Route path='/portfolio' component={Portfolio}/>
                    <Route path='/' exact strict component={Homepage}/>
                    <Route path='/blog' exact strict component={Blog}/>
                </div>
            </BrowserRouter>
        );
    }
}