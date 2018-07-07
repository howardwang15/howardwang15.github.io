import React from 'react';
import Button from '../Button';
import './style.css';


export default class Collapsible extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false
        }
    }

    style = {
        color: this.props.textColor 
    }

    toggleDisplay() {
        this.setState({
            opened: !this.state.opened
        });
    }

    render() {
        return (
            <div>
                <Button title={this.props.title} textColor={this.props.textColor} border={false} 
                    onClick={() => this.toggleDisplay()}/>  
                {this.state.opened ? <div>{this.props.content}</div> : null}
            </div>
        )
    }
}