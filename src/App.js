import React from 'react';
import Header from './components/header-comp';
import MainBody from './components/prayer-comp';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            date: undefined,
            prayerTimeFajr: undefined,
            prayerTimeDhuhr: undefined,
            prayerTimeAsr: undefined,
            prayerTimeMaghrib: undefined,
            prayerTimeIshaa: undefined,
            sunrise: undefined
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <MainBody/>
                {/*<Calendar/>*/}
            </div>
        );
    }
}

export default App;
