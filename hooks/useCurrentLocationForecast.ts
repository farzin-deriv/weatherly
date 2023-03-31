import useLocation from "./useLocation";
import useForecast from "./useForecase";

const useCurrentLocationForecast = () => {
  const location = useLocation();
  const query = location
    ? `${location.coords.latitude},${location.coords.longitude}`
    : "london";
  const forecast = useForecast(query);

  return forecast;
};

export default useCurrentLocationForecast;
