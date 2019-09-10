import React from 'react';
import { connect } from 'react-redux';
import { SWITCH_PAGE, HOME, ABOUT_ME, PORTFOLIO } from '../../actions/page';
import './styles.css';

class Topbar extends React.Component {
    switchPage(page) {
        this.props.dispatch({
            type: SWITCH_PAGE,
            payload: page
        });
    }

    render() {
        return (
            <div className='navbar'>
                <div className='navitem' onClick={() => this.switchPage(HOME)}>HOME</div>
                <div className='navitem' onClick={() => this.switchPage(ABOUT_ME)}>ABOUT ME</div>
                <div className='navitem' onClick={() => this.switchPage(PORTFOLIO)}>PORTFOLIO</div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { ...state };
}

export default connect(mapStateToProps)(Topbar);