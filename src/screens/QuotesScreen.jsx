import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react';
import jsonData from '../../data.json';
import SwipeView from '../components/SwipeView';
import Header from '../components/Header';
import { connect } from 'react-redux';
import ScreenLayout from '../components/ScreenLayout';
import globalStyles from '../assets/styles/globalStyles';

const quotes = jsonData.quotes;

const QuotesScreen = ({ isDarkTheme }) => {
  const [activeSubQuote, setActiveSubQuote] = useState(0);

  return (
    <ScreenLayout>
      <View style={styles.progressIndicators}>
        {quotes[0].slice(1).map((subquote, index) => {
          const width = Math.floor((100 / quotes[0].slice(1).length) - 2).toString() + '%';
          return <View key={`indicator${index}`} style={styles.progressIndicatorBar(width, activeSubQuote === index, isDarkTheme)} />
        })}
      </View>
      <Header isDarkTheme={isDarkTheme} />
      <SwipeView activeSubQuote={activeSubQuote} setActiveSubQuote={setActiveSubQuote} subQuoteLength={(quotes[0].length) - 2}>
        <View style={styles.contentContainer}>
          {quotes[0].slice(1).map((subquote, index) => {
            const width = Math.floor((100 / quotes[0].length) - 2).toString() + '%';
            return (index === activeSubQuote && <Text key={`content${index}`} style={globalStyles.quoteText(isDarkTheme, subquote.italics)}>{subquote.message}</Text>)
          })}
        </View>
      </SwipeView>
    </ScreenLayout>
  )
}


const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps) (QuotesScreen);

const styles = StyleSheet.create({
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
  progressIndicatorBar: (width, isActive, isDarkMode) => ({
    height: 2,
    backgroundColor: isActive ? `${isDarkMode ? '#fff' : '#000'}` : 'grey',
    width,
  }),
  
})