import { SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import React from 'react';
import globalStyles from '../assets/styles/globalStyles';

const ScreenLayout = ({ isDarkTheme, children}) => {
  return (
    <SafeAreaView style={globalStyles.SafeAreaContainer(isDarkTheme)}>
      {children}
    </SafeAreaView>
  )
}

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps) (ScreenLayout);