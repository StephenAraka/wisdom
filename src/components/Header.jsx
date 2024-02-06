import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React, { useState } from "react";
import Menu from "./Menu";
import assets from "../constants/assets";
import colors from "../constants/colors";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const date = new Date().toLocaleDateString("en-GB", {
    weekday: "short",
    month: "long",
    day: "2-digit",
  });

  // Function to show or hide the menu
  //-----------------------------------
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.header}>
      {/* Calendar Icon */}
      <View style={styles.dateSection}>
        <Image
          source={assets.calendarIconDarkTheme}
          style={styles.calendarIcon}
        />
        <View style={styles.dateWrapper}>
          <Text style={styles.dateTopRow}>Today</Text>
          <Text style={styles.dateBottomRow}>{date}</Text>
        </View>
      </View>

      {/* Menu Icon */}
      <TouchableOpacity style={styles.menuSection} onPress={toggleModal}>
        <Image source={assets.menuIconDarkTheme} style={styles.menuIcon} />
      </TouchableOpacity>

      {/* Menu */}
      {isModalVisible && <Menu toggleModal={toggleModal} />}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  calendarIcon: {
    width: 40,
    height: 40,
  },
  dateBottomRow: {
    color: colors.textColorDarkTheme,
    fontSize: 12,
  },
  dateSection: {
    flexDirection: "row",
    gap: 8,
    paddingLeft: 16,
  },
  dateTopRow: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.textColorDarkTheme,
  },
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
