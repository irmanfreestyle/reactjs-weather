import React from 'react';
import './App.css';
import axios from 'axios';
import moment from 'moment';

// IMPORT COMPONENTS
import Header from './components/Header.js';
import Content from './components/Content.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
      daily: [],
      key: 'ff65f62f0ad258a5df3babd66b82f3f5',
    }
  }

  async getCurrent(lat, lon) {
    let {key} = this.state
    let daily = [];
    await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`).then(res => {
      daily = res.data.daily.map(data => ({
        dayName: moment.unix(data.dt).format('ddd'),
        desc: data.weather[0].description,
        icon: data.weather[0].icon,
        temp: (parseFloat((data.temp.max + data.temp.max) / 2) - 273.15).toFixed(0),
      }));
    })

    daily.splice(0, 1);
    daily.splice(5, 2)
    this.setState({
      daily,
    });
  }

  async loadByLocation() {
    let {key} = this.state
    await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=jakarta&appid=${key}`)
      .then(async res => {
        let result = res.data;
        console.log(result)
        this.setState({
          current: {
            temp: (parseFloat(result.main.temp) - 273.15).toFixed(0),
            desc: result.weather[0].description,
            humidity: result.main.humidity,
            wind: result.wind.speed * (60*60)/1000,
            icon: result.weather[0].icon,
            locationName: result.name
          }
        });

        let {lat, lon} = result.coord;
        await this.getCurrent(lat, lon);
      })
  }

  async componentDidMount() {
    await this.loadByLocation()
  }

  render() {
    let {current, daily} = this.state;
    return (
      <div className="app">
        <div className="container">
          <Header data={current} />
          <Content data={daily} />
        </div>
      </div>
    )
  }
}

export default App;
