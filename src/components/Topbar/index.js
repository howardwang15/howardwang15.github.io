import React from 'react';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Homepage from '../Homepage';
import './style.css';


const style = {
    position: 'relative',
    color: 'red',
    top: '200px'
};

const s = {
    position: 'fixed'
}

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
                    <Route path='/portfolio' render={() => {
                        console.log('we on the portfolio');
                        return <h1 style={style}>PORTFOLIO</h1>
                    }}/>
                    <Route path='/' exact strict component={Homepage}/>
                    <Route path='/blog' exact strict render={() => {
                        console.log('we on the blog');
                        return <h1 style={style}>BLOG</h1>
                    }}/>
                </div>
            </BrowserRouter>
        );
    }
}