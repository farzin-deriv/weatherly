import { useQuery } from "react-query";

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

const baseUrl = "https://api.weatherapi.com/v1/forecast.json";
const key = "7aacb96ac9124b899e651012233003";

const useForecast = (query: string) =>
  useQuery<TResponse>(["forecast", query], () =>
    fetch(`${baseUrl}?key=${key}&q=${query}`).then((res) => res.json())
  );

export default useForecast;
