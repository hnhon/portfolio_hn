import React from 'react';

function Portfolio() {
    let portfolio = [
        {
            title: 'Weaher Checker',
            content: 'A web application to inquire weather information for specific cities from Openweather API.',
            tech: ['Backend: Node.Js, Experss.Js, EJS', 'Frontend: Html, CSS, JavaScript'],
            link: 'https://weatherappdemo.herokuapp.com/'
        }, 
        {
            title: 'Budget Planner',
            content: 'Check daily, monthly, yearly bills and plan budget',
            tech: ['React, React Hooks, Context API (state management), Material UI'],
            link: 'https://condescending-volhard-b5788d.netlify.app/'
        },
        {
            title: 'Blog Posts',
            content: 'Post, Delete, Edit Posts Easily.',
            tech: ['Backend: Node.Js Express.Js', 'Frontend: Html, CSS, JavaScript, EJS', 'DataBase: MongoDB'],
            link: 'https://quickblogposts.herokuapp.com/blogs'
        },
        {
            title: 'ToDo List',
            content: 'A web app to add, delete and track toDo items, store data on local browsers.',
            tech: ['JavaScript, React, LocalStorage'],
            link: 'https://hnhon.github.io/todolistdemo/'
        },
        {
            title: 'Color Game',
            content: 'Play a color gussing game on your browsers',
            tech: ['Backend: Node.Js, Experss.Js, EJS', 'Frontend: Html, CSS, JavaScript'],
            link: 'https://hnhon.github.io/colorgame/'
        }, 
        {
            title: 'Battleship Game',
            content: 'Classic Battleship game play with computer',
            tech: ['Frontend: Html, CSS, JavaScript'],
            link: 'https://hnhon.github.io/battleship/'
        }, 
        {
            title: 'Tic-Tac-Toe Game',
            content: 'Classic Tic-Tac-Toe game play with computer',
            tech: ['Frontend: Html, CSS, JavaScript'],
            link: 'https://hnhon.github.io/tic-tac-toe/'
        },
        {
            title: 'Book Library',
            content: 'CRUD App',
            tech: ['Frontend: Html, CSS, JavaScript'],
            link: 'https://hnhon.github.io/BookLibrary-/'
        }
    ]
    return (
        <div className='portfolio' id='portfolio'>
            <h2>Portfolio</h2>
            <div className='cards'>
                {portfolio.map(el => {
                    return (
                        <div className='card'>
                            <div className='card-title'>{el.title}</div>
                            <div className='card-content'>{el.content}</div>
                            <div className='card-tech'>{el.tech.map(el => {
                                return (
                                    <li>
                                        {el}
                                    </li>
                                )
                            })}</div>
                            <div>
                                <a href={el.link} target='_blank' rel="noopener noreferrer">See Live</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Portfolio;