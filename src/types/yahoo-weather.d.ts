export interface IconMap {
  code: number;
  text:	string;
  image: string;
}

export interface ForecastResult {
  code: string;
  date: string;
  day: string;
  high: string;
  low: string;
  text: string;
}

export interface WeatherResult {
  [name: string]: string | {};

  channel: {
    units: {
      distance: string;
      pressure: string;
      speed: string;
      temperature: string;
    };
    title: string;
    link: string;
    description: string;
    language: string;
    lastBuildDate: string;
    ttl: string;
    location: {
      city: string;
      country: string;
      region: string;
    };
    wind: {
      chill: string;
      direction: string;
      speed: string;
    };
    atmosphere: {
      humidity: string;
      pressure: string;
      rising: string;
      visibility: string;
    };
    astronomy: {
      sunrise: string;
      sunset: string;
    };
    image: {
      title: string;
      width: string;
      height: string;
      link: string;
      url: string;
    };
    item: {
      title: string;
      lat: string;
      long: string;
      link: string;
      pubDate: string;
      condition: {
        code: string;
        date: string;
        temp: string;
        text: string;
      };
      forecast: ForecastResult[];
      description: string;
      guid: {
        isPermaLink: string;
      }
    }
  };
}
