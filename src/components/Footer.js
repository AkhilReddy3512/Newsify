import React from 'react';
import logo from "./news.png"
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6">
                        <div className="logo">
                            <img src={logo} alt="Logo" />
                        </div >
                        <p>Newsify is a web application that provides users with the latest news from various sources and categories</p>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="/contactUs">About Me</a></li>
                            <li><a href="https://github.com/pearlscorpio">Other Products</a></li>
                            <li><a href="/contactUs">Contact Me</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="/contactUs">FAQ</a></li>
                            <li><a href="/contactUs">Privacy Policy</a></li>
                            <li><a href="/contactUs">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <h5>Subscribe</h5>
                        <p>Subscribe to our newsletter to receive the latest updates.</p>
                        <form>
                            <input type="email" placeholder="Your email" />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} AKhil Reddy. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/akhileswar-reddy-pearlscorpio/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a href="https://twitter.com/imBAkhilReddy" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://github.com/pearlscorpio" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
