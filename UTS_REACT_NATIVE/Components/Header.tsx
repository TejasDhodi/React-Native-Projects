import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome } from "@expo/vector-icons";
import GradientComponent from "./GradientComponent";
const Header = () => {
  const {
    header,
    navBrand,
    navBrandImg,
    navBrandText,
    rightNavContainer,
    signOutIcon,
    navBrandText1,
    navBrandText2,
  } = styles;
  return (
    <GradientComponent>
      <View style={header}>
        <View style={navBrand}>
          <Image
            source={require("../assets/Images/UTS_logo.png")}
            style={navBrandImg}
          />
          <View style={navBrandText}>
            <Text style={navBrandText1}>UTS</Text>
            <Text style={navBrandText2}>IR UNRESERVED TICKITING</Text>
          </View>
        </View>

        <View style={rightNavContainer}>
          <FontAwesome name="sign-out" size={30} color="black" style={signOutIcon} />
          <Image source={require("../assets/Images/Dots_menu.png")} />
        </View>
      </View>
    </GradientComponent>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingInline: 20,
    paddingTop: 25,
    paddingBottom: 5,
  },
  navBrand: {
    flexDirection: "row",
    gap: 5,
  },
  navBrandImg: {
    height: 48,
    width: 48,
    backgroundColor: "red",
    borderRadius: 50,
  },
  navBrandText: {},
  navBrandText1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  navBrandText2: {
    color: "#fff",
  },
  rightNavContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  signOutIcon: {
    height: 30,
    width: 30,
  },
});
