import React from 'react'

import {
    Link
} from 'react-router-dom'

class Register extends React.Component {
    constructor() {
        super()
        this.isName = false
        this.isEmail = false
        this.isPassword = false
        this.isRepassword = false
    }
    
    submitForm = (target) => {
        target = target.parentElement
        let name = target.querySelector('.name').value
        let email = target.querySelector('.email').value
        let password = target.querySelector('.password').value
        let repassword = target.querySelector('.repassword').value
        let acc = {
            name: name,
            email: email,
            password: password
        }
        this.validateName(name, target)
        this.validateEmail(email, target)
        this.validatePassword(password, target)
        this.isPassword && this.validateRepassword(repassword, password, target)
        this.isEmail && this.isRepassword && this.isName && this.createSuccess(acc, target)     
    }

    validateName = (name, target) => {
        this.isName = false
        if (name.length >= 2) {
            target.querySelector('span.name').style.display = 'none'
            this.isName = true
            return
        }
        if (!name) {
            target.querySelector('span.name').style.display = 'block'
            target.querySelector('span.name').innerText = 'Enter your Name'
            return
        }
        target.querySelector('span.name').style.display = 'block'
        target.querySelector('span.name').innerText = 'Name must 2 character'
    }

    validateEmail = (email, target) => {
        this.isEmail = false
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.props.account.map(item => {
                if (email === item.email) {
                    this.isEmail = true
                    return this.isEmail
                }
                return this.isEmail
            })
            if (this.isEmail) {
                target.querySelector('span.email').style.display =  'block'
                target.querySelector('span.email').innerText = 'Email have exists'
                this.isEmail = false
                return
            }
            target.querySelector('span.email').style.display =  'none'
            this.isEmail = true
            return
        }
        if (!email) {
            target.querySelector('span.email').style.display = 'block'
            target.querySelector('span.email').innerText = "Enter you email!"
            return
        }
        target.querySelector('span.email').style.display = 'block'
        target.querySelector('span.email').innerText = "Email not validate"
    }

    validatePassword = (password, target) => {
        this.isPassword = false
        if (password.length >= 6) {
            target.querySelector('span.password').style.display = 'none'
            this.isPassword = true
            return
        }
        if (!password) {
            target.querySelector('span.password').style.display = 'block'
            target.querySelector('span.password').innerText = "Enter your password"
            return
        }
        target.querySelector('span.password').style.display = 'block'
            target.querySelector('span.password').innerText = "Password must 6 character"
    }

    validateRepassword = (repassword, password ,target) => {
        this.isRepassword = false
        if (repassword === password) {
            this.isRepassword = true
            target.querySelector('span.repassword').style.display = 'none'
            return
        }
        if (!repassword) {
            target.querySelector('span.repassword').style.display = 'block'
            target.querySelector('span.repassword').innerText = 'Enter your password'
            return
        }
        target.querySelector('span.repassword').style.display = 'block'
        target.querySelector('span.repassword').innerText = 'Password not match'
    }

    createSuccess = (acc,target) => {
        target.querySelector('.create-success').style.display = 'block'
        this.props.addNewAccount(acc)
    }

    render() {
        let props = this.props
        return (
            <div className="register">
                <h1>Let's get you set up!</h1>
                <input 
                    className="name" 
                    type="text" 
                    placeholder="Name" 
                    onKeyUp={(e) => e.keyCode === 13 && this.submitForm(e.target)}
                />
                <span className="name hide"></span>
                <input 
                    className="email" 
                    type="text" 
                    placeholder="Email" 
                    onKeyUp={(e) => e.keyCode === 13 && this.submitForm(e.target)}
                />
                <span className="email hide"></span>
                <input 
                    className="password" 
                    type="password" 
                    placeholder="Password" 
                    onKeyUp={(e) => e.keyCode === 13 && this.submitForm(e.target)}
                />
                <span className="password hide"></span>
                <input 
                    className="repassword" 
                    type="password" 
                    placeholder="ReEnter your password" 
                    onKeyUp={(e) => e.keyCode === 13 && this.submitForm(e.target)}
                />
                <span className="repassword hide"></span>
                <button
                    className="submit"
                    onClick={(e) => this.submitForm(e.target)}
                >Create</button>
                <div className="to-sign">
                    <p>You have account!
                        <Link
                            to="/form-login/sign"
                            onClick={() => props.changeIsRegister(false)}
                        >Sign In</Link>
                    </p>
                </div>
                <div className="create-success">
                    <Link 
                        to='/form-login/sign'
                        className="overlay"
                        onClick={() => props.changeIsRegister(false)}
                    ></Link>
                    <div className="content">
                        <i className="fas fa-check-circle"></i>
                        <h2>Success!</h2>
                        <Link 
                            to="/form-login/sign"
                            onClick={() => props.changeIsRegister(false)}
                        >Sign In</Link>
                    </div>
                </div>
            </div>
        )
    }
    // Bug khong setState khi chay will mount

    componentWillUnmount() {
        window.location.pathname.indexOf('form-login') === -1 && this.props.changeIsStayFormLogin(false)
    }
}

export default Register