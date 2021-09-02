import React from 'react'
import { Link } from 'react-router-dom'

import duAm from '../video/film-du-am.mp4'
import '../style/movies.css'
import { films } from './data.js'

class Movies extends React.Component {

    render() {
        let props = this.props
        let [film] = films.filter(item => `${item.id}` === props.match.params.id)
        let type = film.type.split(',').map(item => item.trim())
        return (
            <div className="movies">
                <div className="play-movie">
                    <div className="movie-wrap">
                        <video controls autoPlay>
                            <source src={duAm} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
                <div className="info-movie flex">
                    <div className="left" >
                        <div className="content">
                            <img src={film.url} alt="" />
                            <div className="left-content">
                                <Link to="/react-tubi-tv" className="add-to-list">Add to My List</Link>
                                <div className="share flex">
                                    <Link to="/react-tubi-tv">Share</Link>
                                    <Link to="/react-tubi-tv"><i className="fas fa-ellipsis-h"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="right" >
                        <h1 className="name">{film.name}</h1>
                        <div className="content">
                            <div className="row flex">
                                <div className="time-type">
                                    <p>{film.time}</p>
                                    {
                                        type.map((item, index) => <span key={index}>{item}</span>)
                                    }
                                </div>
                                <div className="sub flex">
                                    <p>CC</p>
                                    <p>TV-14</p>
                                </div>
                            </div>
                            <div className="dirc">
                                <p className="dirc" >After years in special ops and wrongful imprisonment, a     witness to the murder of a Chinese cop agrees to retrieve a kidnapped girl and a bag of money.</p>
                                <p>DIRECTOR<Link to="/react-tubi-tv">Kenio Waxman</Link></p>
                                <p>STARRING<Link to="/react-tubi-tv">Steven Seagal, Marlaina, MahVitaly Kravchenko</Link></p>
                            </div>
                        </div>

                    </div>
                    {/* Mobile */}
                    <div className="share-small hide">
                        <Link to="/react-tubi-tv" className="add-to-list">Add to My List</Link>
                        <Link to="/react-tubi-tv">Share</Link>
                        <Link to="/react-tubi-tv"><i className="fas fa-ellipsis-h"></i></Link>
                    </div>
                    <div className="dirc-small hide">
                        <p className="dirc" >After years in special ops and wrongful imprisonment, a     witness to the murder of a Chinese cop agrees to retrieve a kidnapped girl and a bag of money.</p>
                        <span>DIRECTOR<Link to="/react-tubi-tv">Kenio Waxman</Link></span>
                        <span>STARRING<Link to="/react-tubi-tv">Steven Seagal, Marlaina, MahVitaly Kravchenko</Link></span>
                    </div>
                </div>
            </div>
        )
    }

}

export default Movies