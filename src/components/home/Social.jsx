import React from 'react'
import "./home.css"

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://www.linkedin.com/in/ziv-ashkenazi/" rel="noreferrer" className="home__social-icon" target="_blank">
                <i className="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/ziv9529" className="home__social-icon" rel="noreferrer" target="_blank">
                <i className="uil uil-github"></i>
            </a>
        </div>
    )
}

export default Social