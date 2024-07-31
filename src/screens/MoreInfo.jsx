import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { connect } from "react-redux";
import ScreenLayout from "../components/ScreenLayout";
import colors from "../constants/colors";
import globalStyles from "../assets/styles/globalStyles";

const MoreInfo = ({ isDarkTheme }) => {
  return (
    <ScreenLayout>
        <View style={styles.headingWrapper(isDarkTheme)}>
          <Text style={[globalStyles.normalText(isDarkTheme), styles.screenHeading]}>About The App</Text>
        </View>
        <View style={styles.disclaimerContainer}>
          <Text style={[globalStyles.normalText(isDarkTheme), styles.subHeaderText]}>Acknowledgment and Disclaimer</Text>
          <Text style={[globalStyles.normalText(isDarkTheme), styles.normalText]}>All quotes displayed in this application are sourced from the book "A Calendar of Wisdom" by Leo Tolstoy. The rights to these quotes belong to the original author and publishers.</Text>
          <Text style={[globalStyles.normalText(isDarkTheme), styles.normalText]}>This application is a personal project created with the sole intention of sharing the wisdom and insights from Leo Tolstoy's work. No copyright infringement is intended, and no ownership of the content is claimed.</Text>
          <Text style={[globalStyles.normalText(isDarkTheme), styles.normalText]}>If you enjoy the quotes, we encourage you to support the original work by obtaining a copy of "A Calendar of Wisdom."</Text>
        </View>
        <Text style={[globalStyles.smallText(isDarkTheme), styles.versionText]}>Wisdom App</Text>
        <Text style={[globalStyles.smallText(isDarkTheme), styles.versionText]}>Version: 0.0.1</Text>
    </ScreenLayout>
  );
};

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps, {})(MoreInfo);

const styles = StyleSheet.create({
  headingWrapper: (isDarkTheme) => ({
    backgroundColor: isDarkTheme ? colors.textColorLightTheme : colors.lightGreyLightTheme,
    borderBottomWidth: isDarkTheme ? 1 : 0,
    borderColor: colors.lightGreyDarkTheme,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
  }),
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
  }
});
