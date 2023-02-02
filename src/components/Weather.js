import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Weather = (props) => {
  const { cityDetails, currentWeather, forecast } = props.data;

  const today = new Date(forecast.DailyForecasts[0].Date).toLocaleDateString('en', { weekday: 'long' });
  const todayDate = new Date(forecast.DailyForecasts[0].Date).toLocaleDateString('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const day1 = new Date(forecast.DailyForecasts[1].Date).toLocaleDateString('en', { weekday: 'short' });
  const day2 = new Date(forecast.DailyForecasts[2].Date).toLocaleDateString('en', { weekday: 'short' });
  const day3 = new Date(forecast.DailyForecasts[3].Date).toLocaleDateString('en', { weekday: 'short' });
  const day4 = new Date(forecast.DailyForecasts[4].Date).toLocaleDateString('en', { weekday: 'short' });

  return (
    <div className="container">
      <div className="thumb">
        <div className="day">{today}</div>
        <div className="date">{todayDate}</div>
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="city">{cityDetails.EnglishName}</span>,
          <span className="country">{cityDetails.Country.ID}</span>
        </div>
        <div className="icon">
          <img
            src={`../assets/img/icons/${currentWeather.WeatherIcon}.svg`}
            id="thumbIcon"
            alt="weather icon"
          />
        </div>
        <div className="temperature">
          <span>{currentWeather.Temperature.Metric.Value}</span>
          &deg;C
        </div>
        <div className="text">{currentWeather.WeatherText}</div>
      </div>
      <div className="forecast">
        <div className="precipitation">
          <div className="precipitation__title">Precipitation</div>
          <div className="precipitation__value">{forecast.DailyForecasts[0].Day.PrecipitationProbability} %</div>
        </div>
        <div className="humidity">
          <div className="humidity__title">Humidity</div>
          <div className="humidity__value">{currentWeather.RelativeHumidity} %</div>
        </div>
        <div className="wind">
          <div className="wind__title">Wind</div>
          <div className="wind__value">{forecast.DailyForecasts[0].Day.Wind.Speed.Value} km/h</div>
        </div>
        <div className="forecast__wrapper">
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src={`../assets/img/icons/${forecast.DailyForecasts[1].Day.Icon}.svg`}
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">{day1}</div>
            <div className="forecast__temperature">
              <span>{forecast.DailyForecasts[1].Temperature.Maximum.Value}</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src={`../assets/img/icons/${forecast.DailyForecasts[2].Day.Icon}.svg`}
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">{day2}</div>
            <div className="forecast__temperature">
              <span>{forecast.DailyForecasts[2].Temperature.Maximum.Value}</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src={`../assets/img/icons/${forecast.DailyForecasts[3].Day.Icon}.svg`}
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">{day3}</div>
            <div className="forecast__temperature">
              <span>{forecast.DailyForecasts[3].Temperature.Maximum.Value}</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src={`../assets/img/icons/${forecast.DailyForecasts[4].Day.Icon}.svg`}
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">{day4}</div>
            <div className="forecast__temperature">
              <span>{forecast.DailyForecasts[4].Temperature.Maximum.Value}</span>
              &deg;C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
