import React from 'react';
import './style.css';
import Button from '../Button';
import Collapsible from '../Collapsible';

const skills = ['Front-end Development', 'Back-end Development', 'Machine Learning', 'Android development'];
const frameworks = ['React.js', 'Redux', 'Bootstrap', 'MongoDB', 'Tensorflow', 'PyTorch'];
const languages = ['JavaScript (ES6)', 'CSS 3', 'HTML 5', 'C++', 'C', 'Java', 'Python'];
const relevantClasses = 
    [
        'Introduction to Computer Science', 'Data Structures and Algorithms', 'Introduction to Computer Organization', 
        'Software Construction Laboratory', 'Linear Algebra', 'Differential Equations', 'Discrete Mathematics'                 
    ];
const classesInProgress = 
    [
        'Introduction to Algorithms and Complexity', 'Logic Design of Digital Systems', 'Probability Theory'
    ];

const clubs = ['ACM', 'UAS'];
const descriptions = ['hello'];


export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        const collapsed = [false, false, false, false, false, false];
        this.state = {
            collapsed: collapsed
        };
    }

    toggle(id) {
        const newCollapsed = this.state.collapsed;
        newCollapsed[id] = !newCollapsed[id];
        this.setState({
            collapsed: newCollapsed
        });
    }

    render() {
        return (
            <div>
                <div className='skills'>
                    <Button title='What are my skills?' textColor='white' border={false} onClick={() => this.toggle(0)}/>
                    {this.state.collapsed[0] ? <Collapsible data={skills} textColor='white'/> : null}
                </div>
                <div className='skills'>
                    <Button title='What frameworks/libraries do I know' textColor='white' border={false} onClick={() => this.toggle(1)}/>
                    {this.state.collapsed[1] ? <Collapsible data={frameworks} textColor='white'/> : null}
                </div>
                <div className='skills'>
                    <Button title='What languages do I know?' textColor='white' border={false} onClick={() => this.toggle(2)}/>
                    {this.state.collapsed[2] ? <Collapsible data={languages} textColor='white'/> : null}
                </div>
                <div className='skills'>
                    <Button title='What relevant classes have I taken?' textColor='white' border={false} onClick={() => this.toggle(3)}/>
                    {this.state.collapsed[3] ? <Collapsible data={relevantClasses} textColor='white'/> : null}
                </div>
                <div className='skills'>
                    <Button title='What relevant classes am I currently taking?' textColor='white' border={false} onClick={() => this.toggle(4)}/>
                    {this.state.collapsed[4] ? <Collapsible data={classesInProgress} textColor='white'/> : null}
                </div>
                <div className='skills'>
                    <Button title='What clubs am I in?' textColor='white' border={false} onClick={() => this.toggle(5)}/>
                    {this.state.collapsed[5] ? <Collapsible data={clubs} descriptions={descriptions} textColor='white'>
                    </Collapsible> : null}
                </div>
            </div>
        )
    }
}