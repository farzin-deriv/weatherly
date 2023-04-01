import { View, Image, StyleSheet } from "react-native";
import { usePathname, Link } from "expo-router";
import { useScreenSize } from "../hooks";

const tabs = [
  {
    path: "/",
    icon: require("../assets/icons/home_outline.png"),
    activeIcon: require("../assets/icons/home.png"),
  },
  {
    path: "/search",
    icon: require("../assets/icons/search_outline.png"),
    activeIcon: require("../assets/icons/search.png"),
  },
  {
    path: "/favorites",
    icon: require("../assets/icons/marker_outline.png"),
    activeIcon: require("../assets/icons/marker.png"),
  },
  {
    path: "/settings",
    icon: require("../assets/icons/user_outline.png"),
    activeIcon: require("../assets/icons/user.png"),
  },
] as const;

const NavigationBar: React.FC = () => {
  const pathname = usePathname();
  const { isMobile } = useScreenSize();

  return (
    <View style={[styles.container, isMobile && styles.containerMobile]}>
      {tabs.map(({ path, icon, activeIcon }) => {
        const isActive = pathname === path;
        const tintColor = isActive ? "#F2BB57" : "#ffffff90";

        return (
          <Link key={path} href={path}>
            <Image
              source={isActive ? activeIcon : icon}
              style={[styles.icon, { tintColor }]}
            />
          </Link>
        );
      })}
    </View>
  );
};

export default NavigationBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff15",
    display: "flex",
    justifyContent: "space-between",
    position: "absolute",
    paddingVertical: 30,
    paddingHorizontal: 40,
    margin: 25,
    borderRadius: 25,
    left: 0,
    top: 0,
    height: 300,
  },
  containerMobile: {
    flexDirection: "row",
    left: 0,
    right: 0,
    bottom: 0,
    top: "unset",
    height: "unset",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
