import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ended } from "../screens/Ended";
import { Home } from "../screens/Home";
import { Register } from "../screens/Register";
import { Graphic } from "../screens/Graphic";
import { Wallet } from "../screens/Wallet";
import { ArrowBendRightDown, Calendar, ChartLineUp, ChatTeardropText, Check, House, Plus, Wallet as Carteira } from "phosphor-react-native";
import { BlurView } from 'expo-blur';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { View } from "native-base";
import { TouchableOpacity } from "react-native";
import { NewIcon } from "../components/NewIcon";

const { Navigator, Screen } = createBottomTabNavigator();


export function TabRoutes() {
  return (
    <Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#202024",
          borderTopColor: "#000000",
          paddingTop: 5,
          paddingBottom: 5,
        },
        headerShown: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarHideOnKeyboard: true,
        // tabBarButton: (props) => <TouchableOpacity {...props} />,
      }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: "Início",
          headerTitle: "Home",
          headerStyle: {
            backgroundColor: "#202024"
          },
          tabBarIcon: ({ color, size, focused }) => (
            <House weight="fill" size={size} color={color} />)
        }} />
      <Screen
        name="ended"
        component={Ended}
        options={{
          tabBarLabel: "Finalizados",
          tabBarIcon: ({ color, size }) => (
            <Check weight="fill" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="register"
        component={Register}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color, size, focused }) => (
            <NewIcon size={size} color={color} focused={focused} />
          )
        }}
      />
      <Screen
        name="wallet"
        component={Wallet}
        options={{
          tabBarLabel: "Carteira",
          tabBarIcon: ({ color, size }) => (
            <Carteira weight="fill" size={size} color={color} />
          )
        }}
      />
      <Screen
        name="graphic"
        component={Graphic}
        options={{
          tabBarLabel: "Estatisticas",
          tabBarIcon: ({ color, size }) => (
            <ChartLineUp weight="fill" size={size} color={color} />
          )
        }}
      />
    </Navigator>
  )
}