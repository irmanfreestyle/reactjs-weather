import React from 'react';

export default function Content(props) {
  let days = props.data.map((day, i) => (
    <div key={i}>
      <h4 style={{margin: '0px'}}>{day.dayName}</h4>
      <i
        className="fas fa-moon"
        style={{
          margin: '10px 0px',
          fontSize: '50px',
          color: 'yellow',
          textShadow: '0px 1px 1px #ddd, 0 10px 20px #ccc'
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
        <div className="ig-feed">
          <h4>Instagram Feed</h4>
        </div>

        <div className="days">
          {days}
        </div>
      </div>

      <div className="search-form">
        <div className="input-area">
          <input type="text" placeholder="Search Location" />
          <div className="search-activator">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
