import React from 'react'
import './style.css'

const padding = {
    padding: '5px'
};


export default class Topbar extends React.Component {
    render() {
        return (
            <div className="topbar">
                <div className="box">
                    <a href="" style={padding}>ABOUT ME</a>
                    <a href='portfolio' style={padding}>PORTFOLIO</a>
                </div>
            </div>
        );
    }
}