import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

function About() {
    return (
        <div id='about' className='banner'>
            <h2>Hiunam Hon</h2>
            <p>Hi, I am a self-taught web developer. I learn by building stuffs and enjoy learning new skills from differnt projects. Feel free to <AnchorLink href='#contact'>get in touch</AnchorLink>.</p>
        </div>
    )
};

export default About;