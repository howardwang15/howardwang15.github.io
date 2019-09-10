import React from 'react';
import resume from '../../resources/Resume-web-dev-classes.pdf';

export default class Resume extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <object data={resume} type='application/pdf' width={window.innerWidth*0.6} height={window.innerHeight*0.8}>Browser sucks</object>
            </div>
        )
    }
}

const styles = {
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#5E5E5E'
    }
};