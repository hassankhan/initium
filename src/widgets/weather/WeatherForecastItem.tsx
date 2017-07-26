import * as React from 'react';
import * as Icon from 'react-fontawesome';

import { findIconByCode } from './images/utils';

import { ForecastResult } from '../../types/yahoo-weather';

type WeatherForecastItemProps = ForecastResult;

const WeatherForecastItem: React.SFC<WeatherForecastItemProps> = (props) => {
  let iconName;
  let icon;
  let text;
  const iconDetails = findIconByCode(Number(props.code));

  if (iconDetails) {
    iconName = iconDetails.image;
    text = iconDetails.text;
    icon = require(`./images/${iconName}`);
  }

  return (
    <section className="weather__forecast-item">

      <h4 className="weather__day">{props.day}</h4>
      <div className="weather__icon">
        <img src={icon} title={text} alt={text} />
      </div>
      <p className="weather__temperature weather__temperature--high">
        {props.high}°
        <Icon name="chevron-up" />
      </p>
      <p className="weather__temperature weather__temperature--low">
        {props.low}°
        <Icon name="chevron-down" />
      </p>
    </section>
  );
};

WeatherForecastItem.displayName = 'WeatherForecastItem';

export default WeatherForecastItem;
