import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import history from './history';
import ActionBar from './containers/ActionBar';
import Blog from './containers/Blog';
import Homepage from './containers/Homepage';
import Portfolio from './containers/Portfolio';
import AboutMe from './containers/AboutMe';
import Contact from './containers/Contact';
import NoComponentFound from './containers/404';
import Resume from './containers/Resume';
import { HOME, ABOUT_ME, PORTFOLIO, CONTACT, RESUME } from './actions/page';

class App extends Component {
    renderPage() {
        switch(this.props.page) {
            case HOME:
                return <Homepage />
            case ABOUT_ME:
                return <AboutMe />
            case PORTFOLIO:
                return <Portfolio />
            case CONTACT:
                return <Contact />
            case RESUME:
                return <Resume />
        }
    }

    render() {
        return (
            <div className='app'>                      
                <div>
                    <ActionBar />
                    {this.renderPage()} 
                </div> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(App);
  