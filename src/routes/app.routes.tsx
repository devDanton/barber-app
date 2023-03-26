import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ended } from "../screens/Ended";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Graphic } from "../screens/Graphic";
import { Wallet } from "../screens/Wallet";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="register" component={Register} />
      <Screen name="ended" component={Ended} />
      <Screen name="wallet" component={Wallet} />
      <Screen name="graphic" component={Graphic} />
    </Navigator>
  )
}