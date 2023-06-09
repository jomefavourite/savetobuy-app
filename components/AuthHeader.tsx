import { View } from "react-native";
import React from "react";
import { Image } from "react-native";
// import LoginBG from "../assets/login-bg.svg";
import LoginBgSvg from "./svg/LoginBgSVG";

const AuthHeader = () => {
  // console.log(logoImage);
  return (
    <View>
      <Image
        source={require("../assets/savetobuy.png")}
        style={{ width: 150, height: 30 }}
        className='w-5'
      />

      {/* <LoginBG width={"100%"} style={{ marginBottom: 40 }} /> */}
      <LoginBgSvg width={"100%"} style={{ marginBottom: 40 }} />
    </View>
  );
};

export default AuthHeader;
