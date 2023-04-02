import { Text, StyleSheet } from "react-native";

type TProps = {
  value: number;
  size?: number;
};

const Degree: React.FC<TProps> = ({ value, size = 180 }) => {
  const symbolSize = size / 1.25;
  const symbolMarginTop = size / 7.5;
  const symbolMarginLeft = size / 15;
  const valuePaddingLeft = size / 3;

  return (
    <Text
      style={[
        styles.value,
        {
          fontSize: size,
          paddingLeft: valuePaddingLeft,
        },
      ]}
    >
      {Math.round(value)}
      <Text
        style={[
          {
            fontSize: symbolSize,
            marginTop: -symbolMarginTop,
            marginLeft: -symbolMarginLeft,
          },
        ]}
      >
        °
      </Text>
    </Text>
  );
};

export default Degree;

const styles = StyleSheet.create({
  value: {
    display: "flex",
    flexDirection: "row",
    color: "#F0EFF2",
    fontFamily: "Questrial_400Regular",
    fontWeight: "bold",
  },
});
