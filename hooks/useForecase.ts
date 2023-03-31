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

const baseUrl = "http://api.weatherapi.com/v1/forecast.json";
const key = "7aacb96ac9124b899e651012233003";

const useForecast = (query: string) => {
  const [data, setData] = useState<TResponse>();

  useEffect(() => {
    fetchForecast();
  }, [query]);

  const fetchForecast = async () => {
    const response = await fetch(`${baseUrl}?key=${key}&q=${query}`);

    const json = await response.json();

    setData(json);
  };

  return data;
};

export default useForecast;
