import React from 'react';
import './style.css';



export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    style = {
        color: this.props.textColor,
        border: this.props.border? 'solid' : 'none'
    }

    render() {
        return (
            <div>
                <button className='btn' style={this.style} onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        )
    }
}