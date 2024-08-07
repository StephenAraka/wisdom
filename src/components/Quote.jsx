import { View, Text, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import assets from "../constants/assets";
import globalStyles from "../assets/styles/globalStyles";
import { getMessageFontSize } from "../utils/helpers";
import { setActiveQuote } from "../context/actions/quoteActions";
import { connect } from "react-redux";

const Quote = ({ setActiveQuote, subquote, isDarkTheme }) => {
  useEffect(() => {
    setActiveQuote(subquote)
  }, []);
  
  return (
    <View style={styles.subquoteWrapper}>
      {/* Render quoteIcon only if it is a quote */}
      {subquote.author && (
        <Image source={assets.quoteIcon} style={styles.quoteImage} />
      )}
      <Text style={globalStyles.quoteText(isDarkTheme, subquote.italics, getMessageFontSize(subquote.message))}>
        {subquote.message}
      </Text>
      {/* Render Author or Source only if the subquote has one */}
      {subquote.author && (
        <View style={styles.sourceWrapper}>
          <View style={styles.sourceLine(isDarkTheme)}></View>
          <Text style={globalStyles.sourceText(isDarkTheme)}>
            {subquote.author}
          </Text>
        </View>
      )}
    </View>
  );
};

const matchDispatchToProps = {
  setActiveQuote,
};

const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, matchDispatchToProps)(Quote);

const styles = StyleSheet.create({
  subquoteWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  quoteImage: {
    height: 56,
    width: 56,
  },
  sourceWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "flex-start",
    alignItems: "center",
  },
  sourceLine: (isDarkMode) => ({
    height: 2,
    width: "55%",
    backgroundColor: isDarkMode ? "#504F4F" : "#CDCDCD",
  }),
});
