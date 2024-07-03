import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import assets from "../constants/assets";
import colors from "../constants/colors";
import DatePicker from "./DatePicker";
import { numberOfDayOfYear } from "../utils/helpers";

const Header = ({ isDarkTheme, date, dateIndex }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

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
          source={
            isDarkTheme
              ? assets.calendarIconDarkTheme
              : assets.calendarIconLightTheme
          }
          style={styles.calendarIcon}
        />
        <View style={styles.dateWrapper}>
          {dateIndex < numberOfDayOfYear() ? (
            /* If the days Have passed
              ____________________________ */
            <>
              <Text style={styles.dateTopRow(isDarkTheme)}>{date}</Text>
              <Text style={styles.dateBottomRow(isDarkTheme)}>
                {numberOfDayOfYear() - dateIndex == 1
                  ? `Yesterday`
                  : `${numberOfDayOfYear() - dateIndex} days ago`}
              </Text>
            </>
          ) : numberOfDayOfYear() === dateIndex ? (
            <>
              <Text style={styles.dateTopRow(isDarkTheme)}>
                {numberOfDayOfYear() > dateIndex ? date : "Today"}
              </Text>
              <Text style={styles.dateBottomRow(isDarkTheme)}>{date}</Text>
            </>
          ) : (
            <>
              <Text style={styles.dateTopRow(isDarkTheme)}>{date}</Text>
              <Text style={styles.dateBottomRow(isDarkTheme)}>
                {dateIndex - numberOfDayOfYear() == 1
                  ? `Tomorrow`
                  : `${dateIndex - numberOfDayOfYear()} days ahead`}
              </Text>
            </>
          )}
        </View>
      </TouchableOpacity>

      {/* Calendar */}
      {isCalendarVisible && (
        <DatePicker toggleCalendar={toggleCalendar} isDarkTheme={isDarkTheme} />
      )}

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuSection} onPress={toggleMenu}>
        <Image
          source={
            isDarkTheme ? assets.menuIconDarkTheme : assets.menuIconLightTheme
          }
          style={styles.menuIcon}
        />
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
