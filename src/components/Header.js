import React from 'react';

export default function Header(props) {
  let data = props.data;
  return (
    <div className="header">
      <div className="header-child">
        <div className="degree">
          {data.temp}
          <sup>&#176;</sup>
        </div>
        <div className="condition uppercase">{data.desc}</div>
        <div className="detail">
          <div>
            HUMIDITY <br/>
          {data.humidity}%
          </div>
          <div>
            WIND <br/>
            {data.wind} K/M
          </div>
        </div>
      </div>
      <div className="header-child">
        <div className="uppercase">{data.locationName}</div>
          <br />
          <img
            src={`http://openweathermap.org/img/w/${data.icon}.png`}
            width="100"
            height="100"
            style={{
              filter: 'drop-shadow(3px 3px 0.50rem white)'
            }}
        />
      </div>
    </div>
  )
}
