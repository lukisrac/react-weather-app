import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Weather = (props) => {
  /* const { cityDetails, currentWeather, forecast } = props.data;

  console.log(cityDetails, currentWeather, forecast);
  const today = new Date(forecast.DailyForecasts[0].Date).toLocaleDateString('cs-CZ', { weekday: 'long' });
  const todayDate = new Date(forecast.DailyForecasts[0].Date).toLocaleDateString('cs-CZ', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }); */

  return (
    <div className="container">
      <div className="thumb">
        <div className="day">Čtvrtek</div>
        {/* <div className="day">{today}</div> */}
        <div className="date">15 Srp 2019</div>
        {/* <div className="date">{todayDate}</div> */}
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} />
          <span className="city">-</span>,<span className="country">-</span>
        </div>
        <div className="icon">
          <img
            src="../assets/img/icons/15.svg"
            id="thumbIcon"
            alt="weather icon"
          />
        </div>
        <div className="temperature">
          <span>0</span>
          &deg;C
        </div>
        <div className="text">-</div>
      </div>
      <div className="forecast">
        <div className="precipitation">
          <div className="precipitation__title">Precipitation</div>
          <div className="precipitation__value">0 %</div>
        </div>
        <div className="humidity">
          <div className="humidity__title">Humidity</div>
          <div className="humidity__value">0 %</div>
        </div>
        <div className="wind">
          <div className="wind__title">Wind</div>
          <div className="wind__value">0 km/h</div>
        </div>
        <div className="forecast__wrapper">
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src="../assets/img/icons/11.svg"
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">Mon</div>
            <div className="forecast__temperature">
              <span>0</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src="../assets/img/icons/12.svg"
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">Mon</div>
            <div className="forecast__temperature">
              <span>0</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src="../assets/img/icons/13.svg"
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">Mon</div>
            <div className="forecast__temperature">
              <span>0</span>
              &deg;C
            </div>
          </div>
          <div className="forecast__col">
            <div className="forecast__icon">
              <img
                src="../assets/img/icons/14.svg"
                alt="forecast icon"
              />
            </div>
            <div className="forecast__day">Mon</div>
            <div className="forecast__temperature">
              <span>0</span>
              &deg;C
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
