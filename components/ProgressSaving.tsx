import * as React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  NativeBaseProvider,
  Box,
  Text,
  Center,
  useColorModeValue,
  ScrollView,
} from "native-base";
import Constants from "expo-constants";
import { Progress } from "native-base";
import { useWindowDimensions } from "react-native";

const FirstRoute = () => {
  return (
    <>
      <ScrollView
        h={400}
        flex={1}
        className='space-y-5 overflow-auto'
        scrollEnabled
      >
        {new Array(4).fill(null).map((item, i) => (
          <Box
            flex={1}
            height={200}
            key={i}
            className='w-full rounded-lg bg-white px-3 py-2 text-left hover:border hover:border-mainBlue hover:bg-mainBlue/50'
          >
            <Text>Saving for the unknown</Text>
            <Text>#1000</Text>
            <Progress
              value={45}
              mx='4'
              _filledTrack={{
                bg: "#00adee",
              }}
            />
          </Box>
        ))}
      </ScrollView>
    </>
  );
};

const SecondRoute = () => (
  <Box flex={1}>
    <Center flex={1} my='4'>
      This is Tab 2
    </Center>
  </Box>
);

const ThirdRoute = () => (
  <Box flex={1}>
    <Center flex={1} my='4'>
      This is Tab 2
    </Center>
  </Box>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

function ProgressSaving() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Ongoing",
    },
    {
      key: "second",
      title: "Completed",
    },
    {
      key: "third",
      title: "Cancelled",
    },
  ]);
  const layout = useWindowDimensions();

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#1f2937", "#a1a1aa");
          const borderColor =
            index === i
              ? "cyan.500"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth='3'
              borderColor={borderColor}
              flex={1}
              alignItems='center'
              p='3'
              key={i}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                    opacity,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <Box flex={1} height={400}>
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        // initialLayout={initialLayout}
        initialLayout={{ width: layout.width }}
        // style={{
        //   marginTop: StatusBar.currentHeight,
        // }}
      />
    </Box>
  );
}

export default ProgressSaving;
