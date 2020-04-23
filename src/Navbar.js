import React from 'react';

function Navbar() {
    // const [isActive, setIsActive] = useState(false);
    
    return (
        <div>
            <nav className='nav'>
                <div className='nav-container'>
                    <div className='links'>
                        <a href='#top'>About</a>
                        <a href='#portfolio'>Portfolio</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;