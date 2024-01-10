import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import jsonData from './data.json';
import SwipeView from './src/components/SwipeView';

const quotes = jsonData.quotes;

export default function App() {
  const [activeSubQuote, setActiveSubQuote] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <View style={styles.progressIndicators}>
        {quotes[0].map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
          return <View key={`indicator${index}`} style={styles.progressIndicatorBar(width, activeSubQuote === index)} />
        })}
      </View>
      <SwipeView activeSubQuote={activeSubQuote} setActiveSubQuote={setActiveSubQuote} subQuoteLength={(quotes[0].length) - 1}>
        <View style={styles.contentContainer}>
          {quotes[0].map((subquote, index) => {
            const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
            return (index === activeSubQuote && <Text key={`content${index}`} style={styles.text(subquote.italics)}>{subquote.message}</Text>)
          })}
        </View>
        </SwipeView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#000',
    paddingVertical: 35,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: '100%',
    flex: 1,
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  progressIndicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  progressIndicatorBar: (width, isActive) => ({
    height: 2,
    backgroundColor: isActive ? '#fff' : 'grey',
    width,
  }),
  text: (italics)=> ({
    color: '#fff',
    fontSize: 20,
    fontStyle: italics ? 'italic': 'normal'
  })
});
