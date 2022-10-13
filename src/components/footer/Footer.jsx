import React from 'react'
import "./footer.css"
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <h1 className="footer__title">Ziv</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>

                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/zivashkenazi/" rel="noreferrer" className="footer__social-link" target="_blank">
                        <i class='bx bxl-instagram'></i>
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=1501291386" className="footer__social-link" rel="noreferrer" target="_blank">
                        <i className="bx bxl-facebook"></i>
                    </a>
                </div>

                <span className="footer__copy">&#169; Ziv Ashkenazi. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer