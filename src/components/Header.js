import React from 'react'
import '../style/header.css'
import {
    Link,
} from 'react-router-dom'

import { withRouter } from 'react-router-dom'

class Header extends React.Component {

    routingFunction = (path) => {
        this.props.history.push({
            pathname: path
        });
    }

    showAndHideHeaderWhenScroll = () => {
        const HEADER_HEIGHT = 80
        let beforeY = 0
        let header = document.querySelector('.header')
        window.addEventListener('scroll', () => {
            let path = this.props.location.pathname
            if (path.indexOf('form-login') > -1) {
                return
            }
            let nowY = window.scrollY
            if (nowY > beforeY) {
                header.style.top = -HEADER_HEIGHT + 'px'
                beforeY = nowY
                return
            }
            header.style.top = 0
            beforeY = nowY

            if (nowY !== 0) {
                header.style.background = 'rgba(0, 0, 0, 0.6)'
                return
            }
            header.style.background = 'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))'
        })
    }

    goFormLogin = (str) => {
        let bool = str === 'register' ? true : false
        this.props.changeIsStayFormLogin(true)
        this.changeIsRegister(bool)
    }

    changeIsRegister = (bool) => {
        this.props.changeIsRegister(bool)
    }

    searchHandle = (target) => {
        if (window.location.pathname !== '/search') {
            target.value.length > 0 && this.routingFunction('/search')
        }
        if (window.location.pathname === '/search') {
            target.value.length === 0 && this.routingFunction('/react-tubi-tv/')
            // return
        }
        this.props.getSearchValue(target.value)
    }

    showMenu = () => {
        let menu = document.querySelector('.menu-content')
        menu.style.display = "block"
        menu.style.opacity = 0
        let left = -60
        let opacity = 0
        let id = setInterval(() => {
            left += 10
            opacity += 0.2
            if (left <= 0) {
                menu.style.left = left + "%"
                menu.style.opacity = opacity
                return
            }
            clearInterval(id)
        }, 30)
    }

    hideMenu = () => {
        let menu = document.querySelector('.menu-content')
        let left = 0
        let opacity = 1
        let id = setInterval(() => {
            left -= 10
            opacity -= 0.1
            if (left > -60) {
                menu.style.left = left + "%"
                menu.style.opacity = opacity
                return
            }
            clearInterval(id)
            menu.style.display = "none"
        }, 30)
    }

    render() {
        let isStayFormLogin = this.props.isStayFormLogin
        let props = this.props
        return (
            <header className="header flex" >
                <div className="logo flex" >
                    <Link to="/react-tubi-tv/">
                        <svg alt="Stream Full Length Series &amp; Movies"
                            className="_2rWrR _3GE7h _2DIK5"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 105 44" >
                            <path d="M55.5 12h-7v16a8 8 0 11-16 0V13a1 1 0 00-1-1h-7v16a16 16 0 0032 0V13a1 1 0 00-1-1zM24.1 40.96l-3.03-5.21a1 1 0 00-1.27-.42A8.05 8.05 0 018.54 28v-7a1 1 0 011-1H19.6a1 1 0 001-1v-6a1 1 0 00-1-1H9.54a1 1 0 01-1-1V1a1 1 0 00-1-1H.5v28c0 8.84 7.2 16 16.08 16 2.54 0 4.95-.59 7.1-1.64a1 1 0 00.42-1.4zM100.5 0a4 4 0 100 8 4 4 0 000-8zm3 12h-7v31a1 1 0 001 1h6a1 1 0 001-1V13a1 1 0 00-1-1zm-27 24a8 8 0 110-16 8 8 0 010 16zm0-24c-2.35 0-4.58.5-6.59 1.42a1 1 0 01-1.41-.92V1a1 1 0 00-1-1h-7v28a16 16 0 1016-16z"
                                fill="currentcolor" > </path></svg >
                    </Link>
                    <Link 
                        className="hide-small" 
                        style={{ display: `${isStayFormLogin ? "none" : "block"}` }} 
                        to="/react-tubi-tv/" 
                        onClick={this.showMenu}
                    >Browse</Link>
                    <i
                        style={{ display: `${props.isStayFormLogin ? "none" : ""}` }}
                        className="fas fa-bars menu"
                        onClick={this.showMenu}
                    ></i>
                </div >
                <div className={`${isStayFormLogin ? "hide" : "search flex"} `} >
                    <i className="fas fa-search"></i>
                    <input type="text"
                        placeholder="Find movies and TV show"
                        onChange={
                            (e) => this.searchHandle(e.target)
                        }
                    />
                </div>
                <div className={`${isStayFormLogin ? "hide" : "login flex"} `} >
                    <div className="register-wrap">
                        {
                            props.isLogged ?
                                <div className="welcome flex">
                                    <h1>{`Hi, ${props.currUser.name}`}</h1>
                                    <i className="fas fa-sort-down sign-in"></i>
                                    <div className="brige"></div>
                                    <div className="account">
                                        <Link to="">Account Setting</Link>
                                        <Link to="">Parental Controls</Link>
                                        <Link to="">Help Center</Link>
                                        <Link to="">Activate Your Device</Link>
                                        <Link
                                            to=""
                                            className="sign-out"
                                            onClick={() => props.changeIsLogged(null)}
                                        >Sign Out</Link>
                                    </div>
                                </div> :
                                <Link
                                    to='/form-login/register'
                                    className="register"
                                    onClick={() => this.goFormLogin('register')}
                                >Register</Link>
                        }
                    </div>
                    <div className={`sign-wrap ${props.isLogged ? "hide" : ""}`}>
                        <Link
                            to='/form-login/sign'
                            onClick={() => this.goFormLogin('sign')}
                        >Sign In </Link>
                    </div>
                </div>

                <div className={`${props.isStayFormLogin ? "form-change" : "hide"}`} > {
                    props.isStayFormRegister ? <Link
                        to='/form-login/sign'
                        onClick={
                            () => this.changeIsRegister(false)
                        }>Sign In </Link> : <Link
                            to='/form-login/register'
                            onClick={
                                () => this.changeIsRegister(true)
                            }>Register </Link>
                }
                </div>
                <div className="menu-content">
                    <div
                        className="overlay"
                        onClick={this.hideMenu}
                    ></div>
                    <div className="content">
                        <div className="search-mobile flex">
                            <i className="fas fa-search"></i>
                            <input type="text"
                                placeholder="Find movies"
                                onChange={(e) => this.searchHandle(e.target)}
                                onKeyUp={(e) => e.keyCode === 13 && this.hideMenu()}
                            />
                        </div>
                        <div className="genres">
                            <h2>GENRES</h2>
                            <Link to="/react-tubi-tv/">Action</Link>
                            <Link to="/react-tubi-tv/">Anime</Link>
                            <Link to="/react-tubi-tv/">Classics</Link>
                            <Link to="/react-tubi-tv/">Comendi</Link>
                            <Link to="/react-tubi-tv/">Crime TV</Link>
                            <Link to="/react-tubi-tv/">Horror</Link>
                            <Link to="/react-tubi-tv/">Docuseries</Link>
                            <Link to="/react-tubi-tv/">Drama</Link>
                            <Link to="/react-tubi-tv/">Kids Show</Link>
                            <Link to="/react-tubi-tv/">LifeStyle</Link>
                            <Link to="/react-tubi-tv/">Thriller</Link>

                        </div>
                    </div>
                </div>
            </header>
        )
    }
    componentDidMount() {
        this.showAndHideHeaderWhenScroll()
    }
}

export default withRouter(Header)