import React from 'react'

class HeroFilm extends React.Component {

    render() {
        let props = this.props
        return (
            <div className={`film-img ${props.active === 'active' && 'active'}`}>
                <img src={props.film.url}
                    alt="" />
            </div>
        )
    }
}

export default HeroFilm