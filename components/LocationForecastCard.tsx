import { View, Text, Image, StyleSheet } from "react-native";
import { useForecast } from "../hooks";

type TProps = {
  location: string;
};

const LocationForecastCard: React.FC<TProps> = ({ location }) => {
  const { data, isSuccess } = useForecast(location);

  if (!isSuccess)
    return (
      <View style={styles.container}>
        <Text style={styles.status}>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{data.location.name}</Text>
      <Text style={styles.status}>{data.current.condition.text}</Text>
      <Text style={styles.degree}>{data.current.temp_c}°</Text>
      <Image
        source={{ uri: "http:" + data.current.condition.icon }}
        style={styles.icon}
      />
    </View>
  );
};

export default LocationForecastCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingVertical: 20,
    paddingHorizontal: 40,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    color: "#F0EFF2",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  status: {
    color: "#ffffff90",
    fontSize: 16,
    marginBottom: 20,
  },
  degree: {
    color: "#F0EFF2",
    fontSize: 40,
    fontWeight: "bold",
  },
  icon: {
    width: 100,
    height: 100,
  },
});
