import React from 'react';
import './style.css'


const style = {
    color: 'red',
    position: 'relative',
    top: '200px',
    left: '200px'
}

export default class Blog extends React.Component {
    render() {
        return (
            <div style={style}>
                HELLO
            </div>
        )
    }
}