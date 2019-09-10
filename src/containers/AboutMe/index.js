import React from 'react';
import './styles.css';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='about-me'>
                    I'm a passionate, fun-loving second-year student studying computer science at the University of California,
                    Los Angeles. I've been a coder for about 3 years now. Today, I'm an aspiring full-stack developer and a machine learning enthusiast. 
                    My goal is to use different software technologies to bring the world together in times when we need to stand united. In my spare time, 
                    I enjoy expressing my creativity through various projects that run across my mind, playing and watching basketball, and hanging out with
                    friends and family.
                </div>
                <div className='image-container' />
            </div>
        )
    }
}