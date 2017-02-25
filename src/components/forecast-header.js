import React, { PropTypes } from 'react';
import moment from 'moment';

//Stateless Functional Component.
const ForecastHeader = ({ weather }) => (
  <div className="header">
    <div className="header-wind" title='Wind Speed'>
      <span >{weather.windSpeed.toFixed(0)}<small>mph</small></span>
    </div>
    <div className="header-time">
      <span>
        {displayTime(weather.time)}
      </span>
    </div>
  </div>
)

//display date appropriately.
const displayTime = (time) => (
  moment.unix(time).format('ddd, DD MMM')
)

//Declare propTypes to make sure data received to this component is valid.
ForecastHeader.propTypes = {
  weather: PropTypes.object,
}

export default ForecastHeader