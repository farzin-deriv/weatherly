import { View, Text, Image, StyleSheet } from "react-native";
import useCurrentLocationForecast from "../hooks/useCurrentLocationForecast";

const Home = () => {
  const forecast = useCurrentLocationForecast();

  if (!forecast)
    return (
      <View style={styles.container}>
        <Text style={styles.status}>Loading...</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.city}>{forecast.location.name}</Text>
      <Text style={styles.status}>{forecast.current.condition.text}</Text>
      <Text style={styles.degree}>{forecast.current.temp_c}°</Text>
      <Image
        source={{ uri: "http:" + forecast.current.condition.icon }}
        style={styles.icon}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1abc9c",
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  city: {
    color: "#ecf0f1",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  status: {
    color: "#ecf0f170",
    fontSize: 16,
    marginBottom: 20,
  },
  degree: {
    color: "#ecf0f1",
    fontSize: 40,
    fontWeight: "bold",
  },
  icon: {
    width: 100,
    height: 100,
  },
});
