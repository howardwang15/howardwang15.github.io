import React from 'react';
import './style.css';
import Collapsible from '../Collapsible';

var formatAsList = (array) => {
    array = array.map(element => <li className='bullet'>{element}</li>);
    return <ul>{array}</ul>
}

var skills = ['Front-end Development', 'Back-end Development', 'Machine Learning', 'Android development'];
var frameworks = ['React.js', 'Redux', 'Bootstrap', 'MongoDB', 'Tensorflow', 'PyTorch'];
var languages = ['JavaScript (ES6)', 'CSS 3', 'HTML 5', 'C++', 'C', 'Java', 'Python'];
var relevantClasses = 
    [
        'Introduction to Computer Science', 'Data Structures and Algorithms', 'Introduction to Computer Organization', 
        'Software Construction Laboratory', 'Linear Algebra', 'Differential Equations', 'Discrete Mathematics'                 
    ];
var classesInProgress = 
    [
        'Introduction to Algorithms and Complexity', 'Logic Design of Digital Systems', 'Probability Theory'
    ];
var clubs = ['ACM', 'UAS'];

skills = formatAsList(skills);
languages = formatAsList(languages);
frameworks = formatAsList(frameworks);
relevantClasses = formatAsList(relevantClasses);
classesInProgress = formatAsList(classesInProgress);
clubs = formatAsList(clubs);

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className='skills'>
                    <Collapsible title='What are my skills?' textColor='white' content={skills}/>
                </div>
                <div className='skills'>
                    <Collapsible title='What languages do I know?' textColor='white' content={languages}/>
                </div>
                <div className='skills'>
                    <Collapsible title='What frameworks/libraries do I know?' textColor='white' content={frameworks}/>
                </div>
                <div className='skills'>
                    <Collapsible title='What relevant classes have I taken?' textColor='white' content={relevantClasses}/>
                </div>
                <div className='skills'>
                    <Collapsible title='What relevant classes am I currently taking?' textColor='white' content={classesInProgress}/>
                </div>
                <div className='skills'>
                    <Collapsible title='What clubs am I involved with?' textColor='white' content={clubs}/>
                </div>
            </div>
        )
    }
}