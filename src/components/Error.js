import React from 'react'
import { Link } from 'react-router-dom'

class Error extends React.Component {

    render() {
        return (
            <div className="error">
                <h2>Oh Snap!</h2>
                <p>What you were looking for is not available.
                    But at least you found some popcorn!
                </p>
                <Link to="/">Back Home</Link>
            </div>
        )
    }
}

export default Error