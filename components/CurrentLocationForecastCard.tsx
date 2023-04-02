import { ActivityIndicator } from "react-native";
import { useLocation } from "../hooks";
import LocationForecastCard from "./LocationForecastCard";

const CurrentLocationForecastCard: React.FC = () => {
  const { data, isSuccess } = useLocation();

  if (!isSuccess) return <ActivityIndicator color={"#F0EFF2"} />;

  return (
    <LocationForecastCard
      location={`${data.coords.latitude},${data.coords.longitude}`}
    />
  );
};

export default CurrentLocationForecastCard;
