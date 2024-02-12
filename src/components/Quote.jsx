import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import assets from "../constants/assets";
import globalStyles from "../assets/styles/globalStyles";

const Quote = ({ subquote, isDarkTheme }) => {
  return (
    <View>
      <Image source={assets.quoteIcon} style={styles.quoteImage} />
      <Text style={globalStyles.quoteText(isDarkTheme, subquote.italics)}>
        {subquote.message}
      </Text>
      <Text>{subquote.author}</Text>
    </View>
  );
};

export default Quote;

const styles = StyleSheet.create({
  quoteImage: {
    height: 40,
    width: 40,
  },
});
