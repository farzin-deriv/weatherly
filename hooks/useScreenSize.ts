import { useWindowDimensions } from "react-native";

const useScreen = () => {
  const dimensions = useWindowDimensions();
  const isMobile = dimensions.width < 768;
  const isTablet = dimensions.width >= 768 && dimensions.width < 1024;
  const isDesktop = dimensions.width >= 1024;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
};

export default useScreen;
