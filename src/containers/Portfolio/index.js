import React from 'react';
import './styles.css';
import Flipper from '../../components/Flipper';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            languages: ['JavaScript', 'HTML', 'CSS', 'C++', 'C', 'Python', 'Java', 'SQL'],
            frameworks: ['React', 'Redux', 'Bootstrap', 'Tensorflow', 'PyTorch', 'Node.js', 'MongoDB', 'Vue', 'Pug'],
            tools: ['Git', 'Bash', 'Postman'],
            flipped: false
        }
    }

    render() {
        return (
            <div>
                <div className='container' id='portfolio'>
                    <div id='skills-container'>
                    <table className='table responsive'>
                        <thead>
                            <tr>
                                <th>LANGUAGES</th>
                                <th>FRAMEWORKS/LIBRARIES</th>
                                <th>TOOLS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.languages.map((item, index) => 
                                    <tr key={index}>
                                        <td>{this.state.languages[index]}</td>
                                        <td>{index < this.state.frameworks.length ? this.state.frameworks[index] : null}</td>
                                        <td>{index < this.state.tools.length ? this.state.tools[index] : null}</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                    </div>
                    <div id='projects-container' className='container-fluid'>
                        <span className='projects-header'>PROJECTS</span>
                        <div className='container-fluid'>
                            <div className='row-container'>
                                <div className='col-sm-4 col-sm-offset-1'>
                                    <Flipper title='Bruin Play' description={projectDescriptions.bruinPlay.description} 
                                        info={projectDescriptions.bruinPlay.info} src='https://github.com/howardwang15/bruin-play' />
                                </div>
                                <div className='col-md-4 col-sm-offset-2'>
                                    <Flipper title='Personal Website' description={projectDescriptions.personalWebsite.description} 
                                        info={projectDescriptions.personalWebsite.info} src='https://github.com/howardwang15/howardwang15.github.io' />
                                </div>
                            </div>
                            <div className='row-container'>
                                <div className='col-sm-4 col-sm-offset-1'>
                                    <Flipper title='Linear Regression From Scratch' description={projectDescriptions.linearRegressionScratch.description} 
                                        info={projectDescriptions.linearRegressionScratch.info} src='https://github.com/howardwang15/linear-regession-from-scratch/' />
                                </div>
                                <div className='col-md-4 col-sm-offset-2'>
                                    <Flipper title='Linear Regression With Tensorflow' description={projectDescriptions.linearRegressionTensorflow.description} 
                                        info={projectDescriptions.linearRegressionTensorflow.info} src='https://github.com/howardwang15/linear-regression-boston-houses' />
                                </div>
                            </div>
                            <div className='row-container'>
                                <div className='col-sm-4 col-sm-offset-1'>
                                    <Flipper title='Image Rotation' description={projectDescriptions.rotateImage.description} 
                                        info={projectDescriptions.rotateImage.info} src='https://github.com/howardwang15/rotate-image' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const projectDescriptions = {
    bruinPlay: {
        description: `Bruin Play was an end-of-the-quarter project for one of the clubs at UCLA I'm involved with. It's an online music player (similar to 
                        Spotify) that features over a hundred songs. Bruin Play allows users to listen and download songs for free!`,
        info: `I used React.js with Redux to create a dynamic UI and MongoDB to store information about the songs, ie the song name, artist, etc. To 
                store the actual mp3 files, I used Google Cloud Storage. Finally, I designed a RESTful API to communicate with the songs in the MongoDB 
                database and the songs in Google Cloud with Node.js and Express.`
    },
    personalWebsite: {
        description: `My personal website was designed to help others get to know me more! It's a way to express myself through technology.`,
        info: `I used React.js with Bootstrap to create a responsive UI and many different custom components to keep my code modular.`
    }, 
    linearRegressionScratch: {
        description: `I created a Linear Regression machine learning model to accurately predict house prices in Boston based on features such as square
                        footage, location, crime rate, etc`,
        info: `I used Python along with NumPy to perform arithmetic operations. In the preprocessing stage, I divided the dataset from scikit-learn using 
                NumPy. Training was done with a gradient descent algorithm from scratch.`
    },
    linearRegressionTensorflow: {
        description: `I constructed a Linear Regression machine learning model using the Tensorflow framework to accruate predict house prices in Boston
                        based on a variety of features square footage, location. crime rate, etc. This project was designed to introduce people to machine
                        learning.`,
        info: `I used the Tensorflow framework to preprocess the data, train, and test the model, along with the MatPlotLib module to graph my results`
    },
    rotateImage: {
        description: `I created a python script to rotate images by any angle and calculates the new coordinates of the rotated landmarks on the image. 
                        This script is useful for creating training or testing data for image recognition algorithms`,
        info: `I used OpenCV to calculate the transformation matrix for rotating the image, and then applied that matrix to the image and also to the
                landmarks to get the new coordinates`
    }
};

export default Portfolio;