import React from 'react';
import './style.css';
import Button from '../Button';

export default class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <div className='skills'>
                    What are my skills?
                    <ul> 
                        <li>Front-end development</li>
                        <li>Back-end development</li>
                        <li>Machine learning</li>
                    </ul>
                </div>
                <div className='skills'>
                    <Button title='What frameworks/libraries do I know' textColor='white' border={false}/>
                    <ul>
                        <li className='double'>React.js</li>
                        <li>Redux</li>
                        <li>Node.js</li>
                        <li>Bootstrap</li>
                        <li>MongoDB</li>
                        <li>Tensorflow</li>
                        <li>PyTorch</li>
                    </ul>
                </div>
                <div className='skills'>
                    <Button title='What languages do I know?' textColor='white' border={false}/>
                    <ul>
                        <li>JavaScript (ES6)</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>C++</li>
                        <li>C</li>
                        <li>Java</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className='skills'>
                    What relevant classes have I taken?
                    <ul>
                        <li>Introduction to Computer Science</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Introduction to Computer Organization</li>
                        <li>Software Construction Laboratory</li>
                        <li>Linear Algebra</li>
                        <li>Differential Equations</li>
                    </ul>
                </div>
                <div className='skills'>
                    What relevant classes am I currently taking?
                    <ul>
                        <li>Introduction to Algorithms</li>
                        <li>Logic Design of Digital Systems</li>
                        <li>Probability Theory</li>
                    </ul>
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