import React from 'react';
import './styles.css';

export default class AboutMe extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='about-me'>
                    I'm a passionate, fun-loving third-year student studying CS at the UCLA. I've been a coder for about 5 years now, specializing in machine learning/data science
                    and full-stack web development.
                    My goal in life is to use different software technologies to build products in order to make life easier for everyone. In the past, I've
                    interned at Qualcomm, Vertebrae, and Honey (recently acquired by PayPal).
                    In my spare time, I enjoy expressing my creativity through various projects that run across my mind, analyzing data, playing and watching basketball, and hanging out with
                    friends and family.
                </div>
                <div className='image-container' />
            </div>
        )
    }
}