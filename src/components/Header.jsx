import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import assets from "../constants/assets";
import colors from "../constants/colors";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuItems = ["Share", "Like", "Light Mode", "More Info"];

  // Function to show or hide the menu
  //-----------------------------------
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.header}>
      {/* Calendar Icon
        ------------------ */}
      <View style={styles.dateSection}>
        <Image
          source={assets.calendarIconDarkTheme}
          style={styles.calendarIcon}
        />
        <View style={styles.dateWrapper}>
          <Text style={styles.dateTopRow}>Today</Text>
          <Text style={styles.dateBottomRow}>Wed, 24 January</Text>
        </View>
      </View>

      {/* Menu Icon
      ------------------ */}
      <TouchableOpacity style={styles.menuSection} onPress={toggleModal}>
        <Image source={assets.menuIconDarkTheme} style={styles.menuIcon} />
      </TouchableOpacity>

      {/* Menu
      --------- */}
      {isModalVisible && (
        <View style={styles.modalContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.menuText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
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
    display: "flex",
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
    display: "flex",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  menuIcon: {
    width: 40,
    height: 40,
  },
  modalContainer: {
    backgroundColor: "white",
  },
  menuText: {
    color: "fff",
  },
});
