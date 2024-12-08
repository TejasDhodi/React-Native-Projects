import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Home from './Tabs/Home';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    // <View style={styles.container}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40
  },
});
