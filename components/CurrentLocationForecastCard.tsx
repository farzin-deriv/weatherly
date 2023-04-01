import { useLocation } from "../hooks";
import LocationForecastCard from "./LocationForecastCard";

const CurrentLocationForecastCard: React.FC = () => {
  const { data, isSuccess } = useLocation();

  if (!isSuccess) return null;

  return (
    <LocationForecastCard
      location={`${data.coords.latitude},${data.coords.longitude}`}
    />
  );
};

export default CurrentLocationForecastCard;
