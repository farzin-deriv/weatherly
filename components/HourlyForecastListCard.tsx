import { View, StyleSheet } from "react-native";
import { IHourEntity } from "../types";
import HourForecastCard from "./HourForecastCard";
import { useScreenSize } from "../hooks";

type TProps = {
  data: IHourEntity[];
};

const HourlyForecastListCard: React.FC<TProps> = ({ data }) => {
  const { isMobile, isTablet } = useScreenSize();
  const count = isMobile ? 3 : isTablet ? 6 : 9;

  return (
    <View style={styles.container}>
      {data.slice(0, count).map((hour) => (
        <HourForecastCard key={hour.time} data={hour} />
      ))}
    </View>
  );
};

export default HourlyForecastListCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
