import React from 'react'

class Hero extends React.Component {

    render() {

        return (
            <section id="hero" className="hero">
                <div className="hero-wrap">
                    <div className="hero-content">
                        <div className="name-film flex">
                            <div className="play flex"><i className="fas fa-play"></i></div>
                            <h1>Doc West Doc WestDoc</h1>
                        </div>
                        <div className="slide-film flex">
                            <div className="slide-left flex">
                                <div className="film-img">
                                    <img src="https://canvas-bridge02.tubitv.com/RXiEl0oy4efzvOC-5RJAFT6cbck=/0x0:2000x2854/400x574/smart/img.adrise.tv/cb1f51ef-0afb-4e47-adb6-4724f402f313.jpg"
                                        alt="" />
                                </div>
                                <div className="current-film flex">
                                    <div className="film-img">
                                        <img src="https://canvas-bridge.tubitv.com/IcWirqwWQQkNupvXYX26zMYiXDI=/400x574/smart/img.adrise.tv/cf67fa7f-d8b4-409a-af17-df476f8964ff.jpg"
                                            alt="" />
                                    </div>
                                    <div className="film-info flex">
                                        <div className="left">
                                            <h6>Drama</h6>
                                            <p>(2012)- 1 hr 32 min</p>
                                        </div>
                                        <a href="#">TV-PG</a>
                                    </div>
                                </div>

                            </div>
                            <div className="watch-now">
                                <div className="link-wrap">
                                    <a href="">Watch Now <span>FREE</span></a>
                                </div>
                            </div>
                            <div className="slide-right flex">
                                <div className="film-img">
                                    <img src="https://canvas-bridge.tubitv.com/9PIIB5QU9_3C1nqfpkZvKNwXAgA=/400x574/smart/img.adrise.tv/ef3ec862-0e3c-471a-a6b0-d5c7866db8dc.jpg"
                                        alt="" />
                                </div>
                                <div className="film-img">
                                    <img src="https://canvas-bridge02.tubitv.com/uiqPpsb0bqUZU-EuHBWg3NfhmJE=/400x574/smart/img.adrise.tv/7a933e0f-f8a8-4300-9038-96a57b4b4c9b.jpg"
                                        alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Hero


