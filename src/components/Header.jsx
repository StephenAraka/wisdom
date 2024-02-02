import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import assets from '../constants/assets';
import colors from '../constants/colors';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.dateSection}>
        <Image source={assets.calendarIconDarkTheme} style={styles.calendarIcon} />
        <View style={styles.dateWrapper} >
          <Text style={styles.dateTopRow}>Today</Text>
          <Text style={styles.dateBottomRow}>Wed, 24 January</Text>
        </View>
      </View>
      <View style={styles.menuSection}>
        <Image source={assets.menuIconDarkTheme} style={styles.menuIcon} />
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  calendarIcon: {
    width: 40,
    height: 40,
  },
  dateBottomRow: {
    color: colors.textLight,
    fontSize: 12,
  },
  dateSection: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
    paddingLeft: 16,
  },
  dateTopRow: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textLight,
  },
  dateWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
  }
});
