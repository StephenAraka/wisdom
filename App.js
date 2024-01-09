// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const data = require('./data.json') 
const quotes = data.quotes

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.progressIndicators}>
        {quotes[0].map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
          return <View key={`indicator${index}`} style={styles.progressIndicatorBar(width)} />
        })}
      </View>
      <View style={styles.contentContainer}>
        {quotes[0].map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
          return <Text key={`content${index}`} style={styles.text}>{subquote.message}</Text>
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: '100%',
    flex: 1,
  },
  progressIndicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressIndicatorBar: (width) => ({
    height: 4,
    backgroundColor: '#fff',
    width,
  }),
  text: {
    color: '#fff',
  }
});
