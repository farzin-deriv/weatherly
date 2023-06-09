import { View, StyleSheet } from "react-native";
import { CurrentLocationForecastCard } from "../components";

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <CurrentLocationForecastCard />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#41808A",
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 35,
  },
});
