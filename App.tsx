import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { NativeBaseProvider } from "native-base";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const isLoggedIn = false;
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isLoggedIn ? (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name='AuthenticatedStackScreen'
                component={AuthenticatedStackScreen}
              />
            </Stack.Group>
          ) : (
            <Stack.Group screenOptions={{ headerShown: false }}>
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='SignIn' component={Login} />
            </Stack.Group>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

const AuthenticatedStackScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={Home} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  );
};
