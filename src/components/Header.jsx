import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Menu from "./Menu";
import assets from "../constants/assets";
import colors from "../constants/colors";
import DatePicker from "./DatePicker";

const Header = ({ isDarkTheme }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    month: "long",
    day: "2-digit",
  });

  /* Function to show or hide the menu
  -------------------------------------*/
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  /* Function to show or hide Calendar
  --------------------------------------*/
  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <View style={styles.header}>
      {/* Calendar Icon */}
      <TouchableOpacity style={styles.dateSection} onPress={toggleCalendar}>
        <Image
          source={isDarkTheme ? assets.calendarIconDarkTheme : assets.calendarIconLightTheme}
          style={styles.calendarIcon}
        />
        <View style={styles.dateWrapper}>
          <Text style={styles.dateTopRow(isDarkTheme)}>Today</Text>
          <Text style={styles.dateBottomRow(isDarkTheme)}>{date}</Text>
        </View>
      </TouchableOpacity>

      {/* Calendar */}
      {isCalendarVisible && <DatePicker toggleCalendar={toggleCalendar} />}

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuSection} onPress={toggleMenu}>
        <Image source={isDarkTheme ? assets.menuIconDarkTheme : assets.menuIconLightTheme} style={styles.menuIcon} />
      </TouchableOpacity>

      {/* Menu */}
      {isMenuVisible && <Menu toggleMenu={toggleMenu} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  calendarIcon: {
    width: 40,
    height: 40,
  },
  dateBottomRow: (isDarkTheme) => ({
    color: isDarkTheme ? colors.textColorDarkTheme : colors.textColorLightTheme,
    fontSize: 12,
  }),
  dateSection: {
    flexDirection: "row",
    gap: 8,
    paddingLeft: 16,
  },
  dateTopRow: (isDarkTheme) => ({
    fontSize: 16,
    fontWeight: "bold",
    color: isDarkTheme ? colors.textColorDarkTheme : colors.textColorLightTheme,
  }),
  dateWrapper: {
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
});
