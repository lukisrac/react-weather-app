import { useRef } from 'react';

const key = '8OLRyEQzKqhUnGG0VWBQVBpmyBEwUmlS';

const Form = (props) => {
  const inputRef = useRef();

  const getCity = async (city) => {
    const response = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${city}`
    );
    const data = await response.json();
    return data[0];
  };

  const getCurrentWeather = async (id) => {
    const response = await fetch(
      `https://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=${key}&details=true`
    );
    const data = await response.json();
    return data[0];
  };

  const getForecast = async (id) => {
    const response = await fetch(
      `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${key}&details=true&metric=true`
    );
    const data = await response.json();
    return data;
  };

  const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const currentWeather = await getCurrentWeather(cityDetails.Key);
    const forecast = await getForecast(cityDetails.Key);

    return { cityDetails, currentWeather, forecast };
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const city = inputRef.current.value;
    updateCity(city)
      .then((data) => {
        props.onGetWeatherData(data);
      })
      .catch((error) => console.log(error.message));
    e.target.reset();
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="text"
        id="city"
        autoComplete="off"
        placeholder="Enter city"
      />
    </form>
  );
};

export default Form;
