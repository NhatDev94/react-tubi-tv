import React from 'react'
import '../style/formLogin.css'
import {
    Link,
} from 'react-router-dom'

class SignIn extends React.Component {
    constructor() {
        super()

        this.curr = null
    }
    submitForm = (target) => {
        // map qua account tim acc === email => {}
        // Neu tra ve object thi checkPass()
        target = target.parentElement
        let email = target.querySelector('input.email').value
        let password = target.querySelector('input.password').value
        this.validateEmail(email, target)
        this.curr !== null && this.validatePassword(password, target)
        if (this.isPassword) {
            this.loginSuccess()
            target.querySelector('input.email').value = ""
            target.querySelector('input.password').value = ""
        }
    }

    validateEmail = (email, target) => {
        this.isEmail = false
        this.curr = null
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            this.props.account.map(item => {
                if (email === item.email) {
                    this.curr = item
                    return this.curr
                }
                return this.curr
            })
            if (this.curr) {
                target.querySelector('span.email').style.display = 'none'
                return
            }
            target.querySelector('span.email').style.display = 'block'
            target.querySelector('span.email').innerText = "Not account exists"
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
        if (password.length > 5) {
            if (password === this.curr.password) {
                target.querySelector('span.password').style.display = 'none'
                this.isPassword = true
                return
            }
            target.querySelector('span.password').style.display = 'block'
            target.querySelector('span.password').innerText = "Password not correct"
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

    loginSuccess = () => {
        this.props.changeIsLogged(this.curr)
        this.props.history.push('/react-tubi-tv/')
    }

    render() {
        let props = this.props
        return (
            <div className="sign-in" >
                <h1>Welcome Back!</h1>
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
                <button
                    className="submit"
                    onClick={(e) => this.submitForm(e.target)}
                >Sign In</button>
                <span className="forgot">Forgot password?</span>
                <div className="to-register">
                    <p>Create new Account! 
                        <Link
                            to="/form-login/register"
                            onClick={() => props.changeIsRegister(true)}
                        > Register</Link>
                    </p>
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        window.location.pathname.indexOf('form-login') === -1 && this.props.changeIsStayFormLogin(false)
    }
}

export default SignIn