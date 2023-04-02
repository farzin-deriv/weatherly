import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationBar } from "../components";
import { useFonts, Questrial_400Regular } from "@expo-google-fonts/questrial";
import { StyleSheet, View } from "react-native";

const queryClient = new QueryClient();

const AppLayout: React.FC = () => {
  const [isFontLoaded] = useFonts({
    Questrial_400Regular,
  });

  return (
    <View style={styles.container}>
      <QueryClientProvider client={queryClient}>
        {isFontLoaded && <Slot />}
        <NavigationBar />
      </QueryClientProvider>
    </View>
  );
};

export default AppLayout;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    display: "flex",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
