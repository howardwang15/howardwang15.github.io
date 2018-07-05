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
        console.log(this.props);
        var descriptions = this.props.descriptions;
        var data  = this.props.data;
        //description === undefined ? data = data.map((temp) => <ul><li>{temp}</li></ul>) : 
        //data = data.map((temp) => <li>{temp}<ul>{description.map((des) => <li>{des}</li>)}</ul></li>;
        return (
            <div style={this.style}>
                <ul>
                    {data.map(d => <li>{d}</li>)}
                </ul>
                {
                    descriptions.map(des => {
                        return (
                            <ul>
                                <li>{des}</li>
                            </ul>
                        )
                    })
                }
            </div>
        )
    }
}