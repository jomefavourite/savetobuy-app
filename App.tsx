import { NativeWindStyleSheet } from "nativewind";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import { NativeBaseProvider, Heading, Avatar } from "native-base";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Karla_400Regular,
  Karla_500Medium,
  Karla_600SemiBold,
  Karla_700Bold,
  Karla_400Regular_Italic,
  Karla_700Bold_Italic,
} from "@expo-google-fonts/karla";
import { useCallback } from "react";
import { theme } from "./utils";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const isLoggedIn = true;
  let [fontsLoaded] = useFonts({
    Karla_400Regular,
    Karla_500Medium,
    Karla_600SemiBold,
    Karla_700Bold,
    Karla_400Regular_Italic,
    Karla_700Bold_Italic,
  });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider theme={theme}>
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
              <Stack.Screen name='SignIn' component={Login} />
              <Stack.Screen name='SignUp' component={SignUp} />
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
    <Tab.Navigator
      initialRouteName='HomeStack'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#00adee",
      }}
    >
      <Tab.Screen
        name='HomeStack'
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Entypo name='home' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' color={color} size={size} />
          ),
          tabBarIconStyle: {},
        }}
      />
    </Tab.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name='Home'
        component={Home}
        // options={{
        //   headerTitle: (props) => <Heading>Hi, Favourite</Heading>,
        //   headerRight: () => <Avatar size=''>JF</Avatar>,
        // }}
      />
    </HomeStack.Navigator>
  );
};
