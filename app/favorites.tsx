import { View, StyleSheet } from "react-native";
import { LocationForecastCard } from "../components";

const Favorites: React.FC = () => {
  return (
    <View style={styles.container}>
      <LocationForecastCard location="london" />
    </View>
  );
};

export default Favorites;

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
