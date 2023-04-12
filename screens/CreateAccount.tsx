import { View, Text } from "react-native";
import React from "react";
import { Box } from "native-base";

export default function CreateAccount({ navigation }) {
  return (
    <Box safeArea>
      <Text>CreateAccount</Text>

      <Text onPress={() => navigation.navigate("SignIn")}>Sign In</Text>
    </Box>
  );
}
