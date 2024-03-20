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
import { connect } from "react-redux";
import { updateDate, updateDateIndex } from "../context/actions/dateActions";

const DatePicker = ({
  toggleCalendar,
  isDarkTheme,
  updateDate,
  updateDateIndex,
}) => {
  /* Function that runs when a date is clicked on the calendar */
  const pickDate = (date) => {
    const dateObject = new Date(date.dateString);
    const startOfYear = new Date(dateObject.getFullYear(), 0, 0);
    const diff = dateObject - startOfYear;
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const newDateString = dateObject.toLocaleDateString("en-GB", {
      weekday: "short",
      month: "long",
      day: "2-digit",
    });
    updateDate(newDateString);
    updateDateIndex(dayOfYear - 1);
    toggleCalendar(false);
  };

  return (
    <Modal transparent={true}>
      <TouchableOpacity
        style={styles.datePickerBg(isDarkTheme)}
        onPress={toggleCalendar}
      >
        <View style={styles.calendarWrapper}>
          <Calendar
            onDayPress={(day) => {
              pickDate(day);
            }}
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
const mapStateToProps = (state) => ({
  dateIndex: state.theme.dateIndex,
});
const mapDispatchToProps = {
  updateDate,
  updateDateIndex,
};
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker);

const styles = StyleSheet.create({
  datePickerBg: (isDarkTheme) => ({
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: isDarkTheme ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,0.2)",
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
    borderColor: colors.lightGreyLightTheme,
  }),
});
