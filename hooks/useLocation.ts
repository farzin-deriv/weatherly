import { useEffect, useState } from "react";
import * as Location from "expo-location";

type TLocation = Awaited<ReturnType<typeof Location.getCurrentPositionAsync>>;

const useLocation = () => {
  const [data, setData] = useState<TLocation>();

  useEffect(() => {
    const hasPermissions = async () => {
      const { status } = await Location.getForegroundPermissionsAsync();

      return status === "granted";
    };

    const getLocation = async () => {
      if (await hasPermissions()) {
        const location = await Location.getCurrentPositionAsync({});

        setData(location);
      }
    };

    getLocation();
  }, []);

  return data;
};

export default useLocation;
