import { useEffect, useState } from "react";

type TResponse = {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
};

const useForecast = (query: string) => {
  const [forecast, setForecast] = useState<TResponse>();

  useEffect(() => {
    fetchForecast();
  }, [query]);

  const fetchForecast = async () => {
    const key = "7aacb96ac9124b899e651012233003";

    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${query}`
    );

    const data = await response.json();

    setForecast(data);
  };

  return forecast;
};

export default useForecast;
