import { StyleSheet, ScrollView } from 'react-native';

import Hero from './Components/Hero';
import Collection from './Components/Collection';
import Services from './Components/Services';
import Footer from './Components/Footer';
import {SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  
  return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Hero />
          <Collection />
          <Services />
          <Footer />
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
