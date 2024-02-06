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

const DatePicker = ({ toggleCalendar }) => {
  return (
    <Modal transparent={true}>
      <TouchableOpacity style={styles.datePickerBg} onPress={toggleCalendar}>
        <View style={styles.calendarWrapper}>
          <Calendar
            style={styles.calendar}
            theme={{
              calendarBackground: colors.menuBgColorDarkTheme,
              textSectionTitleColor: "#fff",
              dayTextColor: colors.textColorDarkTheme,
              todayTextColor: "#00d4f0",
              textDisabledColor: "#4d4d4d",
              monthTextColor: "#fff", // Month text color
              arrowColor: "#fff", // Arrow color
              textDayFontFamily: "Arial",
            }}
          />
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default DatePicker;

const styles = StyleSheet.create({
  datePickerBg: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
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
