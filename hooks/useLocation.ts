import { useEffect, useState } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] =
    useState<Awaited<ReturnType<typeof Location.getCurrentPositionAsync>>>();

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});

      setLocation(locationData);
    };

    getLocation();
  }, []);

  return location;
};

export default useLocation;
