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
          <br /> <br />
        <i
          className="fas fa-moon"
          style={{
            fontSize: '50px',
            textShadow: '0px 1px 1px #ddd, 0 10px 20px #ccc',
            color: 'yellow',
          }}
        />
      </div>
    </div>
  )
}
