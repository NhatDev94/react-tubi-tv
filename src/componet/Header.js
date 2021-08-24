import React from 'react'


class Header extends React.Component {

    render() {
        return (
            <header className="header flex">
                <div className="logo flex">
                    <svg alt="Stream Full Length Series &amp; Movies" className="_2rWrR _3GE7h _2DIK5"
                        preserveAspectRatio="xMidYMid meet" viewBox="0 0 105 44">
                        <path
                            d="M55.5 12h-7v16a8 8 0 11-16 0V13a1 1 0 00-1-1h-7v16a16 16 0 0032 0V13a1 1 0 00-1-1zM24.1 40.96l-3.03-5.21a1 1 0 00-1.27-.42A8.05 8.05 0 018.54 28v-7a1 1 0 011-1H19.6a1 1 0 001-1v-6a1 1 0 00-1-1H9.54a1 1 0 01-1-1V1a1 1 0 00-1-1H.5v28c0 8.84 7.2 16 16.08 16 2.54 0 4.95-.59 7.1-1.64a1 1 0 00.42-1.4zM100.5 0a4 4 0 100 8 4 4 0 000-8zm3 12h-7v31a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm-27 24a8 8 0 110-16 8 8 0 010 16zm0-24c-2.35 0-4.58.5-6.59 1.42a1 1 0 01-1.41-.92V1a1 1 0 00-1-1h-7v28a16 16 0 1016-16z"
                            fill="currentcolor"></path>
                    </svg>
                    <a href="#/">Browse</a>
                </div>
                <div className="search flex">
                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Find movies, TV show and more" />
                </div>
                <div className="login flex">
                    <div className="register-wrap">
                        <a href="#/" className="register">Register</a>
                    </div>
                    <a href="#/" className="sign-in">Sign In</a>
                </div>
            </header>
        )
    }
}

export default Header