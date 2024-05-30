import { Stack } from "expo-router";

const Layout = (): JSX.Element => {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4B31EA",
        },
        headerTintColor: "#ffffff",
        headerTitle: "Memo App",
        headerBackTitle: "Back",
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: "bold",
        },
      }}
    />
  );
};
export default Layout;
