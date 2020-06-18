import React from 'react';

function Portfolio() {
    return (
        <div id='portfolio'>
            <h2>Portfolio</h2>
            <div className='single-portfolio'>
                <h3 className='first'>Weather Checker</h3>
                <p>
                    A web application to inquire weather information for specific cities.
                </p>
                <ul>
                    <li>Backend: Node.Js Express.Js</li>
                    <li>Frontend: Html, CSS, JavaScript, EJS</li>
                    <li>API: Openweather API</li>
                </ul>
                <a href='https://weatherappdemo.herokuapp.com/' target='_blank' rel="noopener noreferrer">See Live</a>
            </div>
            <div className='single-portfolio'>
                <h3 className='first'>Quick Blog Posts (work in progress)</h3>
                <p>
                    Post, Delete, Edit Posts Easily.
                </p>
                <ul>
                    <li>Backend: Node.Js Express.Js</li>
                    <li>Frontend: Html, CSS, JavaScript, EJS</li>
                    <li>DataBase: MongoDB</li>
                </ul>
                <a href='https://quickblogposts.herokuapp.com/blogs' target='_blank' rel="noopener noreferrer">See Live</a>
            </div>
            <div className='single-portfolio'>
                <h3>ToDo List</h3>
                <p>A web app to add, delete and track toDo items, store data on local browsers.</p>
                <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>LocalStorage</li>
                </ul>
                <a href='https://hnhon.github.io/todolistdemo/' target='_blank' rel="noopener noreferrer">See Live</a>
            </div>
            <div className='single-portfolio'>
                <h3>Simple Game</h3>
                <p>Play a gussing game on your browsers</p>
                <ul>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>DOM EventListener</li>
                </ul>
                <a href='https://hnhon.github.io/colorgame/' target='_blank' rel="noopener noreferrer">See Live</a>
            </div>
        </div>
    )
};

export default Portfolio;