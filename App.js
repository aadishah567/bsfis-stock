import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CoinDetailScreen  from './src/screens/CoinDetailScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailScreen/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  }
});
