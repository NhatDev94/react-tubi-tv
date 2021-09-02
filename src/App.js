import React from 'react'
import './style/App.css';
import Home from './components/Home.js'
import Header from './components/Header.js'
import FormLogin from './components/FormLogin.js'
import SearchResults from './components/SearchResults.js';
import Movies from './components/Movies.js'

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import Footer from './components/Footer';

let initState = {
    isLogged: false,
    isStayFormLogin: false,
    isStayFormRegister: false,
    currUser: null,
    searchValue: null,
}

let store = window.localStorage

class App extends React.Component {
    constructor() {
        super()
        this.state = store.getItem("state") ? JSON.parse(store.getItem('state')) : initState
    }

    // Khong luu tren local duioc 
    changeIsStayFormLogin = (bool) => {
        let state = this.state
        state.isStayFormLogin = bool
        store.setItem('state',JSON.stringify(state))
        this.setState({state: state}, () => null)
    }

    changeIsRegister = (bool) => {
        let state = this.state
        state.isStayFormRegister = bool
        store.setItem('state',JSON.stringify(this.state))
        this.setState({state: state}, () => null)
    }

    changeIsLogged = (curr) => {
        let bool = curr === null ? false : true
        let newState = this.state
        newState.isLogged = bool
        newState.currUser = curr
        store.setItem('state',JSON.stringify(this.state))
        this.setState({ state: newState }, () => null)
    }

    getSearchValue = (str) => {
        this.setState({ searchValue: str }, () => null)
    }

    render() {
        let state = this.state
        return (
            <Router>
                <div className="app">
                    <Header
                        isLogged={state.isLogged}
                        currUser={state.currUser}
                        isStayFormLogin={state.isStayFormLogin}
                        isStayFormRegister={state.isStayFormRegister}
                        changeIsStayFormLogin={this.changeIsStayFormLogin}
                        changeIsRegister={this.changeIsRegister}
                        changeIsLogged={this.changeIsLogged}
                        getSearchValue={this.getSearchValue}
                    />

                    <Switch>
                        <Route
                            path="/form-login/:status"
                            component={({ history }) =>
                                <FormLogin
                                    history={history}
                                    changeIsStayFormLogin={this.changeIsStayFormLogin}
                                    changeIsRegister={this.changeIsRegister}
                                    changeIsLogged={this.changeIsLogged}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/search"
                            component={({ history }) =>
                                <SearchResults
                                    history={history}
                                    searchValue={state.searchValue}
                                />
                            }
                        />
                        <Route
                            exact
                            path="/movies/:id"
                            component={({ match }) =>
                                <Movies
                                    match={match}

                                />
                            }
                        />
                        <Route
                            exact
                            path="/"
                            component={({ history }) =>
                                <Home
                                    history={history}
                                    isStayFormLogin={state.isStayFormLogin}
                                    changeIsStayFormLogin={this.changeIsStayFormLogin}
                                />
                            }
                        />
                    </Switch>

                    <Footer />
                </div>
            </Router>
        )
    }

}

export default App;
