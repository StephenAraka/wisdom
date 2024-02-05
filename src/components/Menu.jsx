import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import React from "react";
import assets from "../constants/assets";
import colors from "../constants/colors";

const Menu = ({ toggleModal }) => {
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

  return (
    <Modal transparent={true}>
      <TouchableOpacity style={styles.modalBg} onPress={toggleModal}>
        <View style={styles.modalContainer}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => console.log("menu item")}
              >
                <Image source={item.icon} style={styles.menuItemIcon} />
                <Text style={styles.menuText}>{item.text}</Text>
              </TouchableOpacity>

              {/* Separator for menu items */}
              {index < menuItems.length - 1 && (
                <View style={styles.separator}></View>
              )}
            </View>
          ))}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Menu;

const styles = StyleSheet.create({
  modalBg: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  modalContainer: {
    backgroundColor: colors.menuBgColorDarkTheme,
    position: "absolute",
    width: "70%",
    alignSelf: "flex-end",
    top: "12%",
    marginRight: 12,
    borderRadius: 4,
  },
  menuItem: {
    flexDirection: "row",
    gap: 12,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  menuItemIcon: {
    width: 20,
    height: 20,
  },
  menuSection: {
    position: "relative",
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
