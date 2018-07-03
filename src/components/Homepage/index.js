import React from 'react';
import Topbar from '../Topbar'
import './style.css'

export default class Homepage extends React.Component {
    render() {
        return (
            <div>
                <Topbar />
                <div className='blurb'>
                    HELLO, I'M HOWARD WANG.
                </div>
                <div className='about-me'>
                    I'm a passionate, fun-loving second-year student and engineer majoring in computer science at the University of California,
                    Los Angeles. I love full stack web development as well as machine learning. My goal is to use different 
                    software technology to bring the world together in times when we need to stand united. In my spare time, 
                    I enjoy watching and playing basketball. wiejgieajrigo erjhoi arejoi areoijhoiaerj hoijreaoih oiserzjhoi ajreiohj iorehj oiarjeoih
                </div>
                <div className='image'>

                </div>
            </div>
        )
    }
} 