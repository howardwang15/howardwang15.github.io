import React from 'react';
import './styles.css';

export default class NoComponent extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div className='row' style={styles.numbers}>
                    <div className='four'></div>
                    <div className='zero'></div>
                    <div className='four'></div>
                </div>
                <div>
                    The page you were looking for was moved or doesn't exist.
                </div>
                <div>
                    In the meantime, why don't you go just keep staring at this amazing page? (jk)
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'black',
        backgroundColor: 'white',
        fontSize: '3vh'
    },
    numbers: {
        display: 'flex',
        flexDirection: 'row'
    }
};