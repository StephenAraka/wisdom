import { StyleSheet, View, useColorScheme } from "react-native";
import React, { useState, useEffect } from "react";
import jsonData from "../../data.json";
import SwipeView from "../components/SwipeView";
import Header from "../components/Header";
import { connect } from "react-redux";
import ScreenLayout from "../components/ScreenLayout";
import Quote from "../components/Quote";
import { initializeTheme } from "../context/actions/themeActions";
import { retrieveData } from "../utils/helpers";

const quotes = jsonData.quotes;

const QuotesScreen = ({ isDarkTheme, initializeTheme }) => {
  const [activeSubQuote, setActiveSubQuote] = useState(0);
  const theme = useColorScheme();
  const systemIsDarkTheme = theme === "dark";

  const today = new Date();
  const startOfYear = new Date(today.getFullYear(), 0, 0);
  const diff = today - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const dateIndex = dayOfYear - 2;
  console.log("====================================");
  console.log(quotes.length);
  console.log("====================================");
  useEffect(() => {
    const checkForThemeInStorage = async () => {
      const previousSavedTheme = await retrieveData("theme");
      const previousSavedThemeIsDark = previousSavedTheme === "dark";
      initializeTheme(
        previousSavedTheme ? previousSavedThemeIsDark : systemIsDarkTheme
      );
    };
    checkForThemeInStorage();
  }, [initializeTheme, systemIsDarkTheme]);

  return (
    <ScreenLayout>
      <View style={styles.progressIndicators}>
        {quotes[dateIndex].slice(1).map((subquote, index) => {
          const width =
            Math.floor(100 / quotes[dateIndex].slice(1).length - 2).toString() +
            "%";
          return (
            <View
              key={`indicator${index}`}
              style={styles.progressIndicatorBar(
                width,
                activeSubQuote === index,
                isDarkTheme
              )}
            />
          );
        })}
      </View>
      <Header isDarkTheme={isDarkTheme} />
      <SwipeView
        activeSubQuote={activeSubQuote}
        setActiveSubQuote={setActiveSubQuote}
        subQuoteLength={quotes[0].length - 2}
      >
        <View style={styles.contentContainer}>
          {quotes[dateIndex].slice(1).map((subquote, index) => {
            const width =
              Math.floor(100 / quotes[dateIndex].length - 2).toString() + "%";
            return (
              index === activeSubQuote && (
                <Quote
                  key={`content${index}`}
                  subquote={subquote}
                  isDarkTheme={isDarkTheme}
                />
              )
            );
          })}
        </View>
      </SwipeView>
    </ScreenLayout>
  );
};

const matchDispatchToProps = {
  initializeTheme,
};

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps, matchDispatchToProps)(QuotesScreen);

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 32,
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  progressIndicators: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  progressIndicatorBar: (width, isActive, isDarkMode) => ({
    height: 2,
    backgroundColor: isActive ? `${isDarkMode ? "#fff" : "#000"}` : "grey",
    width,
  }),
});
