import { Slot } from "expo-router";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigationBar } from "../components";

const queryClient = new QueryClient();

const AppLayout: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <Slot />
    <NavigationBar />
  </QueryClientProvider>
);

export default AppLayout;
