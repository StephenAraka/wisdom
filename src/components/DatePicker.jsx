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

const DatePicker = ({ toggleCalendar, isDarkMode }) => {
  return (
    <Modal transparent={true}>
      <TouchableOpacity
        style={styles.datePickerBg(isDarkMode)}
        onPress={toggleCalendar}
      >
        <View style={styles.calendarWrapper}>
          <Calendar
            style={styles.calendar}
            theme={{
              calendarBackground: colors.menuBgColorDarkTheme,
              textSectionTitleColor: colors.textColorDarkTheme,
              dayTextColor: colors.textColorDarkTheme,
              todayTextColor: colors.wisdomBlue,
              textDisabledColor: colors.lightGreyDarkTheme,
              monthTextColor: colors.textColorDarkTheme,
              arrowColor: colors.wisdomBlue,
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePickerBg: (isDarkMode) => ({
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: isDarkMode ? "rgba(0,0,0,0.7)" : "rgba(205,205,205,0.7)",
  }),
  calendarWrapper: {
    position: "absolute",
    top: "10%",
    left: "4%",
  },
  calendar: {
    color: colors.textColorDarkTheme,
    borderWidth: 1,
    color: colors.textColorDarkTheme,
    borderRadius: 4,
    backgroundColor: colors.menuBgColorDarkTheme,
    height: 350,
  },
});
