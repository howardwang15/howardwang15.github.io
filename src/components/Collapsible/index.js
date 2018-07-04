import React from 'react';
import './style.css';


export default class Collapsible extends React.Component {
    constructor(props) {
        super(props);
    }

    style = {
        color: this.props.textColor 
    }

    render() {
        console.log(this.props.data);
        return (
            <div style={this.style}>
                <ul>
                    {this.props.data.map((bullet) => 
                        <li>{bullet}</li>
                    )}
                </ul>
            </div>
        )
    }
}