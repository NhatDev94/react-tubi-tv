import React from 'react'


class Film extends React.Component {



    render() {
        let film = this.props.film
        return (
            <div
                className="item"
            >
                <a href="#">
                    <img src={film.url}
                        alt="" />
                </a>
                <a href="#">
                    <h3 className="name">{film.name} </h3>
                </a>
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
    // componentDidMount() {
    //     let item = document.querySelector('.item')
    //     item && this.props.getFilmWidth(item.clientWidth)
    //     window.addEventListener('resize', () => {
    //         item && this.props.getFilmWidth(item.clientWidth)
    //     })
    // }
}

export default Film