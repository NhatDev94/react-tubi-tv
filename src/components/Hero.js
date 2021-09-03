import React from 'react'
import '../style/hero.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

import { hotFilm } from './data.js'
import HeroFilm from './HeroFilm.js'

import film1 from '../img/film1.jpg'
import film2 from '../img/film2.jpg'
import film3 from '../img/film3.jpg'
import film4 from '../img/film4.jpg'
import film5 from '../img/film5.jpg'
import film6 from '../img/film6.jpg'
import film7 from '../img/film7.jpg'
import film8 from '../img/film8.jpg'

let filmBgImg = [
    film1,
    film2,
    film3,
    film4,
    film5,
    film6,
    film7,
    film8
]

let local = window.localStorage

class Hero extends React.Component {
    constructor() {
        super()
        this.state = {
            // filmIndex: local.getItem('index') ? JSON.parse(local.getItem('index')) : 0,
            filmIndex: 0,
            mount: true
        }
    }

    slideAuto = () => {
        if(!document.querySelector('.hero')) {
            return
        }
        let index = this.state.filmIndex
        let length = hotFilm.length
        let film1 = document.querySelectorAll('.hero .film-img')[0]
        let film2 = document.querySelectorAll('.hero .film-img')[1]
        let film3 = document.querySelectorAll('.hero .film-img')[2]

        let left = document.querySelector('.hero .slide-left .row')
        let right = document.querySelector('.hero .slide-right .right-content')
        let hideLeft = document.createElement('div')
        hideLeft.classList.add('film-img', 'hideleft')
        let hideRight = document.createElement('div')
        hideRight.classList.add('film-img', 'hideRight')
        hideLeft.innerHTML = film3.innerHTML
        hideRight.innerHTML = `<img src=${length - index <= 4 ? hotFilm[index - 4].url :hotFilm[length -4 + index].url}
                                    alt="" />`

        left.append(hideLeft)
        right.append(hideRight)

        let FILM_WIDTH = 65
        let FILM_HEIGHT = 80
        film1.style.marginLeft = -FILM_WIDTH + 'px'
        film3.style.marginLeft = -FILM_WIDTH + 'px'
        film3.style.marginBottom = -FILM_HEIGHT + 'px'
        film3.style.opacity = 0
        film2.classList.remove('active')
        hideLeft.classList.add('active')
        
        window.removeImg = setTimeout(() => {
            film1.remove()
            film3.remove()
            let newIndex = index + 1
            if (newIndex >= length - 1) {
                newIndex = 0
                this.setState({filmIndex: newIndex}, () => null)
                return
            }
            this.setState({filmIndex: newIndex}, () => null)
        }, 1000)
    }

    heroContentHandleClick = (target) => {
        target.classList.value && this.props.history.push('/movies/' + hotFilm[this.state.filmIndex].id)
    }

    render() {
        let length = hotFilm.length
        let filmIndex = this.state.filmIndex
        let bgImage = { backgroundImage: `linear-gradient(rgba(38, 38, 45, 0), rgb(38, 38, 45)), url('${filmBgImg[filmIndex]}')` }
        return (
            <section id="hero" className="hero" style={bgImage}>
                <div className="hero-wrap">
                    <div className="hero-content" onClick={(e) => this.heroContentHandleClick(e.target)}>
                        <div className="name-film flex">
                            <div className="play flex"><i className="fas fa-play"></i></div>
                            <Link to={`/movies/${hotFilm[filmIndex].id}`} >
                                <h1>{hotFilm[filmIndex].name}</h1>
                            </Link>
                        </div>
                        <div className="slide-film flex">
                            <div className="slide-left flex">
                                <div className="current-film flex">
                                    <div className="row flex">
                                        {/* <div className="img1 test">1</div>
                                        <div className="img2 test">2</div> */}
                                        <HeroFilm film={hotFilm[length - 1]} />
                                        <HeroFilm film={hotFilm[0]} active={'active'} />
                                    </div>
                                    <div className="film-info flex">
                                        <div className="left">
                                            <h6>{hotFilm[filmIndex].type}</h6>
                                            <p>{hotFilm[filmIndex].time}</p>
                                        </div>
                                        <Link to="/react-tubi-tv/">TV-PG</Link>
                                    </div>
                                </div>

                            </div>
                            <div
                                className="watch-now"
                            >
                                <div className="link-wrap">
                                    <Link
                                        to={`/movies/${hotFilm[filmIndex].id}`}
                                    >Watch Now <span>FREE</span></Link>
                                </div>
                            </div>
                            <div className="slide-right flex">
                                <div className="right-content flex">
                                    {/* <div className="img3 test" >3</div>
                                    <div className="img4 test" >4</div> */}
                                    <HeroFilm film={hotFilm[1]} />
                                    <HeroFilm film={hotFilm[2]} />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }

    componentDidMount() {
        window.slideAuto = setInterval(() => {
            this.slideAuto()
        }, 3000)
    }

    componentWillUnmount() {
        clearInterval(window.slideAuto)
        clearTimeout(window.removeImg)
    }
}

export default withRouter(Hero)


