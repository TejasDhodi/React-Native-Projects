import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import React from "react";
import {
  heroFirstSectionNavData,
  heroSecondSectionNavData,
} from "../Service/Servicedata";

interface HeroProps {
  handletabContents: (content: string) => void,
  tabContents: string
}
const Hero: React.FC<HeroProps> = ({ handletabContents, tabContents }) => {
  const {
    heroContainer,
    heroFirstSection,
    promotionalText,
    heroNav1,
    heroNav2,
    navLinks,
    navLinkText,
    navLinkImg,
    heroSecondSection,
    secondNavLinkImg,
    heroNavLinks2,
    secondNavLinkText,
    activeNavLinks
  } = styles;
  return (
    <View style={heroContainer}>
      <View style={heroFirstSection}>
        <Text style={promotionalText}>
          Indian Railways offers 3% bonus on recharge of R-Wallet
        </Text>
        <View style={heroNav1}>
          {heroFirstSectionNavData.map(({ text, imgPath }, index) => (
            <Pressable style={[navLinks, tabContents === text && activeNavLinks]} key={index} onPress={() => handletabContents(text)}>
                <Image source={imgPath} style={navLinkImg} />
                <Text style={navLinkText}>{text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View style={heroSecondSection}>
        <FlatList
          data={heroSecondSectionNavData}
          renderItem={({ item, index }) => (
            <Pressable style={[navLinks, heroNavLinks2]}>
              <Image source={item.imgPath} style={secondNavLinkImg} />
              <Text style={secondNavLinkText}>{item.text}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          numColumns={3}
          contentContainerStyle={heroNav2}
        />
      </View>
    </View>
  );
};

export default Hero;

const styles = StyleSheet.create({
  heroContainer: {},
  heroFirstSection: {
    width: "100%",
  },
  promotionalText: {
    fontSize: 16,
    textAlign: "center",
    marginBlock: 5,
    color: "blue",
  },
  heroNav1: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 10,
    marginTop: 7,
  },
  heroNav2: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  navLinks: {
    alignItems: "center",
    // marginBottom: 10,
    width: "20%",
  },
  activeNavLinks: {
    borderBottomColor: '#FF6D00',
    borderBottomWidth: 2,
    paddingBottom: 3
  },
  heroNavLinks2: {
    height: 60,
    width: "33.33%",
    backgroundColor: "#ffffff",
    marginBottom: 0,
    borderColor: "#E1E1E1",
    borderWidth: 3,
    borderRightWidth: 2,
    paddingBlock: 3,
    justifyContent: "space-between",
  },
  navLinkText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#000000",
    fontSize: 13
  },
  secondNavLinkText: {
    fontSize: 14,
    fontWeight: "800",
    width: "100%",
    textAlign: "center",
    color: "#FF6D00",
  },
  navLinkImg: {
    height: 35,
    width: 35,
    borderRadius: 50,
  },
  secondNavLinkImg: {
    backgroundColor: "transparent",
    height: 25,
    width: 25,
    objectFit: "fill",
  },
  heroSecondSection: {},
});
