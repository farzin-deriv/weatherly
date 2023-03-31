import { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import useLocation from "../hooks/useLocation";
import useForecast from "../hooks/useForecase";

const Home = () => {
  const location = useLocation();
  const query = location
    ? `${location.coords.latitude},${location.coords.longitude}`
    : "london";
  const forecast = useForecast(query);

  if (!forecast) return <Text>Loading...</Text>;

  return (
    <View
      style={{
        backgroundColor: "#1abc9c",
        display: "flex",
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#ecf0f1", fontSize: 30, fontWeight: "bold" }}>
        {forecast.location.name}
      </Text>
      <Text style={{ color: "#ecf0f170", fontSize: 18 }}>
        {forecast.current.condition.text}
      </Text>
      <Text style={{ color: "#ecf0f1", fontSize: 30, fontWeight: "bold" }}>
        {forecast.current.temp_c}°
      </Text>
      <Image
        source={{ uri: "http:" + forecast.current.condition.icon }}
        style={{ width: 100, height: 100 }}
      />
    </View>
  );
};

export default Home;
