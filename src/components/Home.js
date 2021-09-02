import React from 'react'
import Hero from './Hero.js';
import Main from './Main.js';
import { films } from './data.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Hero />
                <Main films={films} />
            </div >
        )
    }
    // componentDidMount() {
    //     this.isMount === true && this.props.changeIsStayFormLogin(false)
    // }
    componentWillUnmount() {
        window.scrollTo({top: 0})
    }
}

export default Home