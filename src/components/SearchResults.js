import React from 'react'
import { films } from './data'
import Film from './Film'
import '../style/results.css'


class SearchResults extends React.Component {
    render() {
        let searchValue = this.props.searchValue.toLowerCase()
        searchValue && searchValue.toLowerCase()
        return (
            <div className="results">
                <h4>Results for</h4>
                <p className="search-key">{searchValue}</p>
                <span className="hide note">No matches</span>
                <div className="results-list">
                    {
                        films.map((item, index) => {
                            if (item.name.toLowerCase().indexOf(searchValue) > -1
                                || item.type.toLowerCase().indexOf(searchValue) > -1) {
                                return <Film film={item} key={index} />
                            }
                            return null
                        })
                    }
                </div>
            </div>
        )
    }
    componentWillUnmount() {
        window.scrollTo({top: 0})
    }
}

export default SearchResults