import { Image } from "react-native";

type TProps = {
  url: string;
  size?: number;
};

const ConditionIcon: React.FC<TProps> = ({ url, size = 250 }) => {
  return <Image source={{ uri: url }} style={{ width: size, height: size }} />;
};

export default ConditionIcon;
