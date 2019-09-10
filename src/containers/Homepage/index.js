import React from 'react';
import { connect } from 'react-redux';
import './styles.css'
import Button from '../../components/Button';
import history from '../../history';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SWITCH_PAGE, CONTACT, RESUME } from '../../actions/page';

class Homepage extends React.Component {
    constructor() {
        super();
        this.contact = this.contact.bind(this);
        this.displayResume = this.displayResume.bind(this);
        this.state = {
            displayText: false
        };
    }

    contact() {
        this.props.dispatch({
            type: SWITCH_PAGE,
            payload: CONTACT
        });
    }

    displayResume() {
        this.props.dispatch({
            type: SWITCH_PAGE,
            payload: RESUME
        });
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ displayText: true })
        }, 1000)
    }

    render() {
        return (
            <CSSTransition in={true} appear={true} timeout={1000} classNames="fade">
                <div style={styles.container}>
                    <div className='row'> 
                            <div className='col-sm-12' style={styles.name}>HOWARD WANG</div>
                    </div>
                    <div className='row' style={{...styles.attributes}}>
                        <div className='descriptions col-sm-4'>Coder.</div>
                        <div className='col-sm-4'>Student.</div>
                        <div className='col-sm-4'>Learner.</div>
                    </div>
                    <div className='row' style={styles.buttonContainer}>
                        <Button title='Contact' textColor='white' border style={styles.buttons.left} onClick={this.contact} />
                        <Button title='Resume' textColor='white' border style={styles.buttons.right} onClick={this.displayResume} />
                    </div>
                </div>
            </CSSTransition>

        )
    }
} 

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center'
    },
    name: {
        color: 'white',
        textAlign: 'center',
        fontSize: '10vh'
    },
    attributes: {
        color: 'white',
        fontSize: '4vh',
        textAlign: 'center',
        margin: '5%'
    },
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row'
    }, 
    buttons: {
        left: {
            marginRight: '15%'
        },
        right: {
            marginLeft: '15%'
        }
    }
};

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(Homepage);