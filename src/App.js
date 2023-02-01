import { useState, useEffect } from 'react';

import Preloader from './components/Preloader';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [dataIsFetched, setDataIsFetched] = useState(false);
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setPageIsLoading(false);
    }, 400);
  }, []);

  const weatherDataHandler = (data) => {
    setWeatherData(data);
    setDataIsFetched(true);
  };

  return (
    <div className="App">
      {pageIsLoading ? <Preloader /> : null}

      <Form onGetWeatherData={weatherDataHandler} />

      {dataIsFetched && weatherData ? <Weather data={weatherData} /> : null}
      <Weather />
    </div>
  );
}

export default App;
