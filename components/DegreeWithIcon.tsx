import { View } from "react-native";
import Degree from "./Degree";
import ConditionIcon from "./ConditionIcon";

type TProps = {
  degree: number;
  icon: string;
  size?: number;
};

const DegreeWithIcon: React.FC<TProps> = ({ degree, icon, size = 250 }) => (
  <>
    <Degree value={degree} size={size / 1.38} />
    <View style={{ marginTop: -(size / 2.6) }}>
      <ConditionIcon url={icon} size={size} />
    </View>
  </>
);

export default DegreeWithIcon;
