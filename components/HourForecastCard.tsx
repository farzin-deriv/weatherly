import { View, Text, StyleSheet } from "react-native";
import ConditionIcon from "./ConditionIcon";
import Degree from "./Degree";
import { IHourEntity } from "../types";

type TProps = {
  data: IHourEntity;
};

const HourForecastCard: React.FC<TProps> = ({ data }) => {
  const time = new Date(data.time).toLocaleTimeString("en", {
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <View style={styles.container}>
      <ConditionIcon url={data.condition.icon} size={60} />
      <Text style={styles.time}>{time}</Text>
      <Degree value={data.temp_c} size={18} />
    </View>
  );
};

export default HourForecastCard;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 30,
  },
  time: {
    color: "#ffffff90",
    fontSize: 16,
    marginVertical: 10,
    fontFamily: "Questrial_400Regular",
  },
});
