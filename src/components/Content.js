import React from 'react';

export default class Content extends React.Component {

  constructor(props) {
    super(props);
    this.onSearchLocation = this.onSearchLocation.bind(this);
  }

  onSearchLocation(e) {
    if(e.key === 'Enter') {
      this.props.passToParent(e.target.value)
    }
  }

  render() {
    let days = this.props.data.map((day, i) => (
      <div key={i}>
        <h4 style={{margin: '0px'}}>{day.dayName}</h4>
        <img
          src={`http://openweathermap.org/img/w/${day.icon}.png`}
          width="60"
          height="60"
          style={{
            filter: 'drop-shadow(3px 3px 0.50rem grey)'
          }}
        />
      <div className="capitalize" style={{maxWidth: '80px', width: '80px', textAlign: 'center', margin: '10px 0px'}}>
          {day.temp}<sup>&#176;</sup>
          <div style={{textAlign: 'center'}}>
            {day.desc}
          </div>
        </div>
      </div>
    ));

    return (
      <div>
        <div className="content-container">
          

          <div className="days">
            {days}
          </div>
        </div>

        <div className="search-form">
          <div className="input-area">
            <input
              type="text"
              placeholder="Search Location"
              value={this.props.locationKeyword}
              onKeyDown={this.onSearchLocation}
            />
            <div className="search-activator">
              <i className="fas fa-search"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
