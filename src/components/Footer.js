import React from 'react'
import Github from '../images/icons/Github-Icon.svg'
import LinkedIn from '../images/icons/LinkedIn-Icon.svg'
import Twitter from '../images/icons/Twitter-Icon.svg'

function Footer() {
    return (
        <footer className="primary-footer">
            <img className="icon" src={Github} alt="Github icon"/>
            <img className="icon" src={LinkedIn} alt="LinkedIn icon"/>
            <img className="icon" src={Twitter} alt="Twitter icon"/>
        </footer>
    )
}

export default Footer