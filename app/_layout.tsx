import { CustomTabBar } from "@/components/CustomTabBar";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs 
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" options={{tabBarLabel: "Home"}} />
      <Tabs.Screen name="investment" options={{tabBarLabel: "Investment"}} />
      <Tabs.Screen name="market" options={{tabBarLabel: "Market"}} />
    </Tabs>
  );
}
