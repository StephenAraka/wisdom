import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenLayout from "../components/ScreenLayout";
import colors from "../constants/colors";

const MoreInfo = () => {
  return (
    <ScreenLayout>
        <View style={styles.headingWrapper}>
          <Text style={styles.screenHeading}>About The App</Text>
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={styles.subHeaderText}>Acknowledgment and Disclaimer</Text>
          <Text style={styles.normalText}>All quotes displayed in this application are sourced from the book "A Calendar of Wisdom" by Leo Tolstoy. The rights to these quotes belong to the original author and publishers.</Text>
          <Text style={styles.normalText}>This application is a personal project created with the sole intention of sharing the wisdom and insights from Leo Tolstoy's work. No copyright infringement is intended, and no ownership of the content is claimed.</Text>
          <Text style={styles.normalText}>If you enjoy the quotes, we encourage you to support the original work by obtaining a copy of "A Calendar of Wisdom."</Text>
        </View>
        <Text style={styles.versionText}>Wisdom App</Text>
        <Text style={styles.versionText}>Version: 0.0.1</Text>
    </ScreenLayout>
  );
};

export default MoreInfo;

const styles = StyleSheet.create({
  headingWrapper: {
    backgroundColor: colors.lightGreyLightTheme,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
  },
  disclaimerContainer: {
    flex: 1,
    display: 'flex',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  normalText: {
    paddingBottom: 16,
  },
  screenHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  subHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  versionText: {
    textAlign: 'center',
    fontSize: 12,
  }
});
