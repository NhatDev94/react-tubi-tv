import React from 'react'
import { Link } from 'react-router-dom'

class Footer extends React.Component {

    render() {

        return (
            <section>
                < section className="about" >
                    <div className="tubi flex">
                        <div className="logo">
                            <Link to="/react-tubi-tv/">
                                <svg alt="Stream Full Length Series &amp; Movies" className="_2rWrR _3GE7h _2DIK5"
                                    preserveAspectRatio="xMidYMid meet" viewBox="0 0 105 44">
                                    <path
                                        d="M55.5 12h-7v16a8 8 0 11-16 0V13a1 1 0 00-1-1h-7v16a16 16 0 0032 0V13a1 1 0 00-1-1zM24.1 40.96l-3.03-5.21a1 1 0 00-1.27-.42A8.05 8.05 0 018.54 28v-7a1 1 0 011-1H19.6a1 1 0 001-1v-6a1 1 0 00-1-1H9.54a1 1 0 01-1-1V1a1 1 0 00-1-1H.5v28c0 8.84 7.2 16 16.08 16 2.54 0 4.95-.59 7.1-1.64a1 1 0 00.42-1.4zM100.5 0a4 4 0 100 8 4 4 0 000-8zm3 12h-7v31a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm-27 24a8 8 0 110-16 8 8 0 010 16zm0-24c-2.35 0-4.58.5-6.59 1.42a1 1 0 01-1.41-.92V1a1 1 0 00-1-1h-7v28a16 16 0 1016-16z"
                                        fill="currentcolor"></path>
                                </svg>
                            </Link>
                        </div>
                        <div className="social flex">
                            <i className="fab fa-facebook-square"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>

                    <ul className="sub-nav flex">
                        <li>
                            <h6>COMPANY</h6>
                            <p>About</p>
                            <p>Careers</p>
                            <p>Contact</p>
                        </li>
                        <li>
                            <h6>SUPPORT</h6>
                            <p>Contact Support</p>
                            <p>Help Center</p>
                            <p>Supported Devices</p>
                            <p>Activate Your Device</p>
                        </li>
                        <li>
                            <h6>PARTNERS</h6>
                            <p>Advertise with Us</p>
                            <p>Partner with Us</p>
                        </li>
                        <li>
                            <h6>GET THE APPS</h6>
                            <p>iOS</p>
                            <p>Android</p>
                            <p>Roku</p>
                            <p>Amazon Fire</p>
                        </li>
                        <li>
                            <h6>PRESS</h6>
                            <p>Press Releases</p>
                            <p>Tubi in the News</p>
                        </li>
                        <li>
                            <h6>LEGAL</h6>
                            <p>Privacy Policy (Updated)</p>
                            <p>Terms of Use (Updated)</p>
                            <p>Do Not Sell My Personal Information</p>
                        </li>
                    </ul>

                </section >

                <footer className="footer">
                    <div className="app">
                        <img src="https://d0.tubitv.com/web/dist/img/fe61624a15f4.svg" alt="" />
                        <img src="https://d0.tubitv.com/web/dist/img/c7a700d8388d.svg" alt="" />
                    </div>
                    <p>Copyright © 2021 Tubi, Inc.</p>
                    <p>Tubi is a registered trademark of Tubi, Inc.</p>
                    <p>All rights reserved.</p>
                    <p>Device ID: dddcb0d3-e03c-44d0-9a41-e2d6db4765a9</p>
                    <span>Made with  in San Francisco</span>
                </footer>
            </section>
        )
    }
}

export default Footer