import { View, Text, StyleSheet } from "react-native";
import { useForecast, useScreenSize } from "../hooks";
import DegreeWithIcon from "./DegreeWithIcon";
import HourlyForecastListCard from "./HourlyForecastListCard";

type TProps = {
  location: string;
};

const LocationForecastCard: React.FC<TProps> = ({ location }) => {
  const { isMobile } = useScreenSize();
  const { data, isSuccess } = useForecast(location);

  if (!isSuccess)
    return (
      <View style={styles.container}>
        <Text style={styles.status}>Loading...</Text>
      </View>
    );

  return (
    <View style={[styles.container, isMobile && { paddingBottom: 130 }]}>
      <View
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.city}>{data.location.name}</Text>
        <Text style={styles.status}>{data.current.condition.text}</Text>
      </View>
      <View
        style={{
          flex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <DegreeWithIcon
          degree={data.current.temp_c}
          icon={data.current.condition.icon}
        />
      </View>
      <HourlyForecastListCard data={data.forecast.forecastday[0].hour} />
    </View>
  );
};

export default LocationForecastCard;

const styles = StyleSheet.create({
  container: {
    height: "95%",
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    color: "#F0EFF2",
    fontSize: 50,
    marginBottom: 5,
    fontFamily: "UbuntuMono_700Bold",
  },
  status: {
    color: "#ffffff90",
    fontSize: 30,
    marginBottom: 20,
    fontFamily: "UbuntuMono_400Regular",
  },
});
