import React from 'react'
import './style.css'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Header from './rout/Header.js'
import Home from './rout/Home.js'
import Sign from './rout/Sign.js'
import Search from './rout/Search.js'

class Exam extends React.Component {
    

    render() {
        return (
            <Router>
                <Header  />

                <Switch>
                    <Route
                        exact
                        path="/"
                        component={({ history }) =>
                            <Home
                                history={history}
                                
                            />
                        }
                    />
                    <Route path="/sign" component={Sign} />
                    <Route
                        path="/search"
                        component={({ history }) =>
                            <Search
                                history={history}
                                
                            />
                        }
                    />
                </Switch>
            </Router>
        )
    }
}

export default Exam