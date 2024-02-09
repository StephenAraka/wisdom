import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import colors from "../constants/colors";

const DatePicker = ({ toggleCalendar, isDarkTheme }) => {
  return (
    <Modal transparent={true}>
      <TouchableOpacity
        style={styles.datePickerBg(isDarkTheme)}
        onPress={toggleCalendar}
      >
        <View style={styles.calendarWrapper}>
          <Calendar
            style={styles.calendar(isDarkTheme)}
            theme={{
              calendarBackground: isDarkTheme
                ? colors.menuBgColorDarkTheme
                : colors.menuBgColorLightTheme,
              textSectionTitleColor: isDarkTheme
                ? colors.textColorDarkTheme
                : colors.textColorLightTheme,
              dayTextColor: isDarkTheme
                ? colors.textColorDarkTheme
                : colors.textColorLightTheme,
              todayTextColor: colors.wisdomBlue,
              textDisabledColor: isDarkTheme
                ? colors.lightGreyDarkTheme
                : colors.lightGreyLightTheme,
              monthTextColor: isDarkTheme
                ? colors.textColorDarkTheme
                : colors.textColorLightTheme,
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
  datePickerBg: (isDarkTheme) => ({
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: isDarkTheme ? "rgba(0,0,0,0.7)" : "rgba(205,205,205,0.7)",
  }),
  calendarWrapper: {
    position: "absolute",
    top: "10%",
    left: "4%",
    width: "75%",
  },
  calendar: (isDarkTheme) => ({
    color: isDarkTheme ? colors.textColorDarkTheme : colors.textColorLightTheme,
    backgroundColor: isDarkTheme
      ? colors.menuBgColorDarkTheme
      : colors.menuBgColorLightTheme,
    borderWidth: 1,
    borderRadius: 4,
    height: 350,
  }),
});
