import React from 'react'

import Film from './Film.js'

class Topic extends React.Component {
    constructor() {
        super()
        this.state = {
            filmWidth: 0,
        }
    }

    begin = 0

    getFilmWidth = (width) => {
        console.log(width);
    }

    next = (title) => {
        document.querySelector('.pre').style.display = 'block'
        let list = document.querySelector('.' + title.toLowerCase())
            .querySelector('.list-wrap')
        let filmWidth = list.querySelector('.item').clientWidth
        let maxWidth = this.props.films.length * filmWidth
        list.scrollTo({
            top: 0,
            left: this.begin += filmWidth * 3,
            behavior: 'smooth'
        })
        this.begin >= maxWidth - list.clientWidth ? this.begin = maxWidth - list.clientWidth : this.begin = this.begin
    }

    pre = (title) => {
        let list = document.querySelector('.' + title.toLowerCase())
            .querySelector('.list-wrap')
        let filmWidth = list.querySelector('.item').clientWidth
        list.scrollTo({
            top: 0,
            left: this.begin -= filmWidth * 3,
            behavior: 'smooth'
        })
        if (this.begin <= 0) {
            this.begin = 0
            document.querySelector('.pre').style.display = 'none'
        }
    }
    render() {
        let films = this.props.films
        let title = this.props.title
        return (
            <section className={'topic' + ' ' + title.toLowerCase()}>
                <div className="topic-wrap">
                    <div className="title flex">
                        <h2>{title}</h2>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                    <div className="list-film flex">
                        <button
                            className="pre"
                            onClick={() => this.pre(title)}
                        ><i className="fas fa-chevron-left"></i></button>
                        <button
                            className="next"
                            onClick={() => this.next(title)}
                        ><i className="fas fa-chevron-right"></i></button>
                        <div className="list-wrap flex">
                            {
                                films.map((item, index) =>
                                    item.type.indexOf(title) > -1 && <Film
                                        film={item}
                                        getFilmWidth={this.getFilmWidth}
                                        key={index}
                                    />
                                )
                            }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
    componentDidMount() {
       // Chua xu li duoc resize
    }
}

export default Topic