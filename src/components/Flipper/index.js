import React from 'react';
import FlipCard from 'react-flipcard-2';
import './styles.css';

export default class Flipper extends React.Component {
    render() {
        return (
            <div id='flip-container'>
                <FlipCard>
                <div className='card-front'>
                    <h1>{this.props.title}</h1>
                    <hr />
                    <p>{this.props.description}</p>
                </div>
                <div className='card-back'>
                    <p>{this.props.info}</p>
                    <p>The link to the project can be found <a href={this.props.src} target='_blank'>here</a></p>
                </div>
                </FlipCard>
            </div>
        )
    }
}