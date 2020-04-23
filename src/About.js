import React from 'react';

function About() {
    return (
        <div id='about'>
        <h2>About</h2>
        <p id='nav-about'>Hi, I am a self-taught web developer. I learn by building stuffs and enjoy learning new skills from differnt projects.</p>
        <p>Feel free to contact me via <a href='https://linkedin.com/in/hiunamhon' rel="noopener noreferrer" target="_blank" className='button'>Linkedin</a> and <a href='https://github.com/hnhon' rel="noopener noreferrer" target="_blank" className='button'>Github</a>.</p>
        <p>List of skills I have been learning so far: </p>
        <ul>
            <li>
                Html
            </li>
            <li>
                CSS
            </li>
            <li>
                JavaScript
            </li>
            <li>
                Node.js
            </li>
            <li>
                Express.js
            </li>
            <li>
                React
            </li>
            <li>
                ES6
            </li>
            <li>
                MongoDB
            </li>
            <li>
                Git
            </li>
            <li>
                RESTful API
            </li>
            <li>
                Json
            </li>
        </ul>
        <p>Skills I am currently working on:</p>
        <ul>
            <li>MERN Stack: look forward to build a full stack web app.</li>
            <li>Responsive Web App: mobile first approach.</li>
            <li>React Hook</li>
        </ul>
        </div>
    )
};

export default About;