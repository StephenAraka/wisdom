import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import assets from "../constants/assets";
import colors from "../constants/colors";

const Header = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const menuItems = [
    {
      text: "Share",
      icon: assets.shareIconDarkTheme,
    },
    {
      text: "Like",
      icon: assets.likeIconDarkTheme,
    },
    {
      text: "Light Mode",
      icon: assets.lightIconDarkTheme,
    },
    {
      text: "More Info",
      icon: assets.infoIconDarkTheme,
    },
  ];

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
            <View>
              <TouchableOpacity key={index} style={styles.menuItem}>
                <Image source={item.icon} style={styles.menuItemIcon} />
                <Text style={styles.menuText}>{item.text}</Text>
              </TouchableOpacity>
              {index < menuItems.length - 1 && (
                <View style={styles.separator}></View>
              )}
            </View>
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
    backgroundColor: colors.menuBgColorDarkTheme,
  },
  menuItem: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
  },

  menuText: {
    color: colors.textColorDarkTheme,
    fontSize: 16,
  },
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#707070",
  },
});
