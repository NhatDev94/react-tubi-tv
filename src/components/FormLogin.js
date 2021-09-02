import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from './Register.js'
import SignIn from './SignIn.js'

let account = [
    {
        name: 'Nhat Demo Dep Trai Sat Gai',
        email: 'demo123@gmail.com',
        password: '123123'
    },
    {
        name: 'Admin Dep Trai',
        email: 'admin@gmail.com',
        password: '123123'
    },
]

class FormLogin extends React.Component {

    addNewAccount = (acc) => {
        account.push(acc)
    }

    render() {
        return (
            <div className="sign-in-page">
                <div className="sign-page-wrap">
                    <div className="icon">
                        <i className="far fa-user"></i>
                    </div>
                    <Switch>
                        <Route exact path='/form-login/sign'>
                            <SignIn
                                account={account}
                                history={this.props.history}
                                changeIsRegister={this.props.changeIsRegister}
                                changeIsStayFormLogin={this.props.changeIsStayFormLogin}
                                changeIsLogged={this.props.changeIsLogged}
                            />
                        </Route>
                        <Route path="/form-login/register">
                            <Register
                                account={account}
                                location={this.props.location}
                                changeIsRegister={this.props.changeIsRegister}
                                changeIsStayFormLogin={this.props.changeIsStayFormLogin}
                                addNewAccount={this.addNewAccount}
                            />
                        </Route>
                    </Switch>
                </div>

            </div>
        )
    }
}

export default FormLogin