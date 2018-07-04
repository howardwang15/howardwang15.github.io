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

export default class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className='skills'>
                    <Button title='What are my skills?' textColor='white' border={false}/>
                    <Collapsible data={skills} textColor='white'/>
                </div>
                <div className='skills'>
                    <Button title='What frameworks/libraries do I know' textColor='white' border={false}/>
                    <Collapsible data={frameworks} textColor='white'/>
                </div>
                <div className='skills'>
                    <Button title='What languages do I know?' textColor='white' border={false}/>
                    <Collapsible data={languages} textColor='white'/>
                </div>
                <div className='skills'>
                    <Button title='What relevant classes have I taken?' textColor='white' border={false}/>
                    <Collapsible data={relevantClasses} textColor='white'/>
                </div>
                <div className='skills'>
                    <Button title='What relevant classes am I currently taking?' textColor='white' border={false}/>
                    <Collapsible data={classesInProgress} textColor='white'/>
                </div>
                <div className='skills'>
                    What clubs am I in?
                    <ul>
                        <li>ACM
                            <ul>
                                <li>Dev Team Officer</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}