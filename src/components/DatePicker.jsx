import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React from "react";
import { Calendar, LocaleConfig } from "react-native-calendars";
import colors from "../constants/colors";

const DatePicker = () => {
  return (
    <View style={styles.calendarWrapper}>
      <Calendar
        style={styles.calendar}
        theme={{
          calendarBackground: colors.menuBgColorDarkTheme,
          textSectionTitleColor: "#b6c1cd",
        }}
      />
    </View>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  calendarWrapper: {
    position: "absolute",
    zindex: 600,
  },
  calendar: {
    borderWidth: 1,
    color: colors.textColorDarkTheme,
    borderColor: "gray",
    backgroundColor: colors.menuBgColorDarkTheme,
    height: 350,
  },
});
