import React from 'react';

export default class Contact extends React.Component {
    render() {
        return (
            <div style={styles.container}>
                <div style={styles.contactMe}>CONTACT ME</div>
                <div className='row' style={styles.contact}>
                    <i className="fa fa-envelope-o" aria-hidden="true" style={styles.icon}></i>
                    <span>howardwang15@g.ucla.edu</span>
                </div>
                <div style={styles.contact}>
                    <i className="fa fa-linkedin-square" aria-hidden="true" style={styles.icon}></i>
                    <span>https://www.linkedin.com/in/yinghao-wang/</span>
                </div>
                <div className='row' style={styles.contact}>
                    <i className="fa fa-facebook-square" aria-hidden="true" style={styles.icon}></i>
                    <span>https://www.facebook.com/howard.win.7</span>
                </div>
                <div style={styles.thanks}>THANK YOU FOR YOUR INTEREST!</div>
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
        color: 'white'
    }, 
    contact: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        fontSize: '1.5vw'
    },
    contactMe: {
        marginBottom: '5%',
        fontSize: '2.5vw',
        fontFamily: 'cursive'
    },
    icon: {
        margin: '3%'
    },
    thanks: {
        fontFamily: 'cursive',
        marginTop: '10%',
        fontSize: '3vw'
    }
};