import { SafeAreaView, StatusBar } from "react-native";
import { connect } from "react-redux";
import React from "react";
import globalStyles from "../assets/styles/globalStyles";
import colors from "../constants/colors";

const ScreenLayout = ({ isDarkTheme, children }) => {
  return (
    <SafeAreaView style={globalStyles.SafeAreaContainer(isDarkTheme)}>
      <StatusBar
        barStyle={isDarkTheme ? "light-content" : "dark-content"}
        backgroundColor={isDarkTheme ? "#000" : colors.white}
        translucent={false}
      />
      {children}
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps)(ScreenLayout);
