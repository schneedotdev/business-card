import React from 'react'
import Github from '../images/icons/Github-Icon.svg'
import LinkedIn from '../images/icons/LinkedIn-Icon.svg'
import Twitter from '../images/icons/Twitter-Icon.svg'

function Footer() {
    return (
        <footer className="primary-footer">
            <a href="https://github.com/brianschnee">
                <img className="icon" src={Github} alt="Github icon"/>
            </a>
            <a href="https://www.linkedin.com/in/brian-schnee-dev">
                <img className="icon" src={LinkedIn} alt="LinkedIn icon"/>
            </a>
            <a href="https://twitter.com/BrianSchneeDev">
                <img className="icon" src={Twitter} alt="Twitter icon"/>
            </a>
        </footer>
    )
}

export default Footer