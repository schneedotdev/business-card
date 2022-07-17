import React from 'react'
import Headshot from '../images/headshot.png'
import Email from '../images/icons/Mail.svg'

function Info() {
    return (
        <>
            <img className="headshot" src={ Headshot } alt="Headshot of Brian Schnee"/>
            <h1 className="name">Brian Schnee</h1>
            <h2 className="title">Full-Stack Software Engineer</h2>
            <div className="site--div">
                <a className="site--link" href="https://brianschnee.com">brianschnee.com</a>
            </div>

            <div className="email--container">
                <a className="email--link" href="mailto:example@gmail.com">
                        <img className="email--icon" src={ Email } alt="email icon" />
                        <h4 className="email--text">Email</h4>
                </a>
            </div>    

        </>
    )
}

export default Info