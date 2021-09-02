import React from 'react'
import { Link } from 'react-router-dom'


class Film extends React.Component {


    render() {
        let film = this.props.film
        return (
            <div className="item">
                <div className="img">
                    <Link to={`/movies/${film.id}`} className="img-wrap"><img src={film.url} alt="" /></Link>
                    <Link to={`/movies/${film.id}`} className="play"><i className="fas fa-play"></i></Link>
                    <Link to="/react-tubi-tv/" className="add-to-list">Add to My List</Link>
                </div>
                <Link to={`/movies/${film.id}`}>
                    <h3 className="name">{film.name} </h3>
                </Link>
                <div className="info flex">
                    <div className="info-left">
                        <p>{film.time}</p>
                        <p>{film.type}</p>
                    </div>
                    <span>PG-13</span>
                </div>
            </div>
        )
    }
}

export default Film