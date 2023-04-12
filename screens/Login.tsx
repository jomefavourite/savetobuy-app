import { View, Text } from "react-native";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {
  return (
    <SafeAreaView>
      <View className='bg-white'>
        <AuthHeader />
        <Text className='text-4xl'>Welcome!</Text>
      </View>
    </SafeAreaView>
  );
}
