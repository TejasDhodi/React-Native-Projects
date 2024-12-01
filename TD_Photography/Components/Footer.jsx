import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importing only FontAwesome5 for icons
import { LinearGradient } from 'expo-linear-gradient'; // Importing LinearGradient from expo

const Footer = ({ sectionRefs }) => {

  const linkedinUrl = 'https://www.linkedin.com/in/tejasdhodi/';
  const twitterUrl = 'https://x.com/dhodi_tejas';
  const instagramUrl = 'https://www.instagram.com/dhoditejas/';

  const openLink = (url) => {
    Linking.openURL(url).catch(err => console.error('Failed to open URL:', err));
  };

  const { footerContainer, headerText, subHeaderText, iconsContainer, icon, footerText } = styles;

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']} // Gradient colors
      style={footerContainer}  
      ref={sectionRefs}
    >
      <Text style={headerText}>Stay Connected</Text>
      <Text style={subHeaderText}>Maharashtra, India</Text>
      <View style={iconsContainer}>
        {/* Social Media Icons */}
        <TouchableOpacity style={icon} onPress={() => openLink(linkedinUrl)}>
          <FontAwesome5 name="linkedin" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={icon} onPress={() => openLink(twitterUrl)}>
          <FontAwesome5 name="twitter" size={25} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={icon} onPress={() => openLink(instagramUrl)}>
          <FontAwesome5 name="instagram" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={footerText}>Copyright @TDPhotography</Text>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    padding: 20,
    alignItems: 'center', 
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#e0e0e0',
    marginVertical: 10,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
  footerText: {
    fontSize: 12,
    color: '#e0e0e0',
    marginTop: 20,
  },
});

export default Footer;
