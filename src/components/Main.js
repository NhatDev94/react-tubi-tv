import React from 'react'
import Topic from './Topic.js'

let topic = [
    'Action',
    'Comedy',
    'Thriller',
    'Horror',
    'Drama',
    'Romance',
    'Western',
    'War',
    'Crime'
]

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
    }

    filterFilm = (topic) => {
        let films = []
        this.props.films.filter(film => {
            if (film.type.indexOf(topic) > -1) {
                films = [...films, film]
            }
            return films
        })
        return films
    }

    loadMore = () => {
        if (this.state.count === topic.length - 1) return
        // Load het film roi => stop
        if (this.state.count + 2 > topic.length - 1) {
            this.setState({ count: topic.length - 1 }, () => null)
        }

        this.setState({ count: this.state.count + 2}, () => null)
        window.addEventListener('scroll', () => {
            if (this.state.count === topic.length - 1) return

            let loadMore = document.querySelector('.load-more')
            let newCount = this.state.count + 2 > topic.length - 1 ? topic.length - 1 : this.state.count + 2
            if (window.scrollY + window.innerHeight > loadMore.offsetTop) {
                this.setState({count: newCount}, () => null)
            }
        })
    }

    render() {
        return (
            <div>
                {
                    topic.map((topic, index) => {
                        if (index > this.state.count) return []
                        let films = this.filterFilm(topic)
                        if (films.length === 0) return []
                        return <Topic title={topic} films={films} key={index} />
                    })
                }


                {/* <Topic
                    title={'Action'}
                    films={films.filter(item => item.type.indexOf('Action') > -1)}
                />
                <Topic
                    title={'Comedy'}
                    films={films.filter(item => item.type.indexOf('Comedy') > -1)}
                /> */}

                <div className="load-more">
                    <div onClick={this.loadMore} >
                        <button>Load More</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main