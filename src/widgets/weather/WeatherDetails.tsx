import * as _ from 'lodash';
import * as React from 'react';

import { findIconByCode } from './images/utils';

import { WeatherResult } from '../../types/yahoo-weather';

import WeatherForecastItem from './WeatherForecastItem';

interface WeatherDetailsProps {
  weather?: WeatherResult;
}

const WeatherDetails: React.SFC<WeatherDetailsProps> = (props) => {

  let icon;
  let iconName;
  let temp;
  let forecast;
  let city;
  let country;
  let condition;
  let code;

  if (props.weather) {
    const { item } = props.weather.channel;
    code = Number(item.condition.code);
    const iconDetails = findIconByCode(code);

    if (iconDetails) {
      iconName = iconDetails.image;
      icon = require(`./images/${iconName}`);
    }

    // console.log(props.weather.channel.item.forecast[0].text);

    condition = props.weather.channel.item.condition.text;
    city = props.weather.channel.location.city;
    country = props.weather.channel.location.country;
    temp = item.condition.temp;
    forecast = item.forecast;
  } else {
    icon = require(`./images/day.svg`);
  }

  return (
    <section className="weather__details">
      <section className="weather__headline">
        <div className="weather__icon">
          <img src={icon} title={condition} alt={condition} />
        </div>
        <div className="weather__status">
          <h4 className="weather__temperature">{temp}°C in</h4>
          <h4 className="weather__location">{city}</h4>
          <h4 className="weather__location">{country}</h4>
        </div>
      </section>
      <section className="weather__forecast">
        <ul>
          {_.map(forecast, (entry, index) => {

            return (
              <li key={`${entry.day}-${index}`}>
                <WeatherForecastItem {...entry} />
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

WeatherDetails.displayName = 'WeatherDetails';

export default WeatherDetails;
