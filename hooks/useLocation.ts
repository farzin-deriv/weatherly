import {
  LocationObject,
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { useQuery } from "react-query";

const useLocation = () =>
  useQuery<LocationObject>(["location"], async () => {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === "granted") return getCurrentPositionAsync({});

    throw new Error("Location permission not granted");
  });

export default useLocation;
