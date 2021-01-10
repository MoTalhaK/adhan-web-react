import React from 'react';
import './body.css';

const MainBody = (props) => {
    return (
        <div className="container">
            <div className="main-display">
                <div className="text-display">
                    <p id="prayer-text">Showing prayer timings for</p>
                </div>
                <div className="date-container">
                    <h2 className="date"></h2>
                    <h2 className="city"></h2>
                </div>
                <div className="prayer-field">
                    <form className="search-form">
                        <input id="search-bar" type="text" placeholder="Location.." name="search"/>
                    </form>
                    <div className="prayers">
                        <div className="prayer">
                            <p className="prayer-name">Fajr</p>
                            <h2 className="prayer-time" id="fajr"></h2>
                        </div>
                        <div className="prayer">
                            <p className="prayer-name">Sunrise</p>
                            <h2 className="prayer-time" id="sunrise"></h2>
                        </div>
                        <div className="prayer">
                            <p className="prayer-name">Dhuhr</p>
                            <h2 className="prayer-time" id="dhuhr"></h2>
                        </div>
                        <div className="prayer">
                            <p className="prayer-name">Asr</p>
                            <h2 className="prayer-time" id="asr"></h2>
                        </div>
                        <div className="prayer">
                            <p className="prayer-name">Maghrib</p>
                            <h2 className="prayer-time" id="maghrib"></h2>
                        </div>
                        <div className="prayer">
                            <p className="prayer-name">Isha'a</p>
                            <h2 className="prayer-time" id="ishaa"></h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="details">
                <div>
                    <p className="details-text">Calculation Method</p>
                    <p id="prayer-method"></p>
                </div>
                <div>
                    <p className="details-text">Latitude/Longitude</p>
                    <p id="lat"></p>
                </div>
                <div>
                    <p className="details-text">Juristic Method</p>
                    <p>Shafi, Maliki, Hanbali</p>
                </div>
            </div>
        </div>
    );
};

export default MainBody;