import React from 'react';

function Portfolio () {
    return (
        <div id='portfolio'>
            <div className='portfolio-container'>
                <h2>Portfolio</h2>
                <div className='single-portfolio'>
                    <h3 className='first'>Weather App</h3>
                    <p>First App I built on Node.js. Enter City to check local weather</p>
                    <p>Backend: Node.Js</p>
                    <p>Framework: Express.Js</p>
                    <p>API: Openweather API</p>
                    <p>Frontend: Html, CSS, JavaScript, EJS</p>
                    <a href='https://weatherappdemo.herokuapp.com/' target='_blank' rel="noopener noreferrer" className='button'>See Live</a>
                </div>
                <div className='single-portfolio'>
                    <h3>To Do List App</h3>
                    <p>My first React App. Creating using Create-reate-app. Implement LocalStorage to store data without database</p>
                    <p>Frontend: React</p>
                    <a href='https://hnhon.github.io/todolistdemo/' target='_blank' rel="noopener noreferrer" className='button'>See Live</a>
                </div>
                <div className='single-portfolio'>
                    <h3>Simple Game</h3>
                    <p>A game written by vanilla JavaScript, Html and CSS. Click the image to match the RGB value to win the game.</p>
                    <a href='https://hnhon.github.io/colorgame/' target='_blank' rel="noopener noreferrer" className='button'>See Live</a>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;