import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function Navbar() {    
    return (
        <div>
            <nav className='nav'>
                <div className='nav-container'>
                    <div className='links'>
                        <AnchorLink href='#about'>About</AnchorLink>
                        <AnchorLink href='#portfolio'>Portfolio</AnchorLink>
                        <AnchorLink href='#contact'>Contact</AnchorLink>
                        {/* <a href='#top' onClick={()=>alert('ha')}>About</a>
                        <a href='#portfolio'>Portfolio</a>
                        <a href='#contact'>Contact</a> */}
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;