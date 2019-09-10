import React from 'react';
import './styles.css';

export default class Button extends React.Component {
    style = {
        color: this.props.textColor,
        border: this.props.border? 'solid' : 'none',
    }

    render() {
        return (
            <div>
                <button className='btn' style={{...this.style, ...this.props.style}} onClick={this.props.onClick}>{this.props.title}</button>
            </div>
        )
    }
}