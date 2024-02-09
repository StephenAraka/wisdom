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
import { connect } from "react-redux";
import { toggleTheme } from "../context/actions/themeActions";

const Menu = ({ toggleMenu, isDarkTheme, toggleTheme }) => {
  const menuItems = [
    {
      text: "Share",
      icon: isDarkTheme
        ? assets.shareIconDarkTheme
        : assets.shareIconLightTheme,
    },
    {
      text: "Like",
      icon: isDarkTheme ? assets.likeIconDarkTheme : assets.likeIconLightTheme,
    },
    {
      text: isDarkTheme ? "Light Mode" : "Dark Mode",
      icon: isDarkTheme ? assets.lightIconDarkTheme : assets.moonIcon,
      onPress: toggleTheme,
    },
    {
      text: "More Info",
      icon: isDarkTheme ? assets.infoIconDarkTheme : assets.infoIconLightTheme,
    },
  ];

  return (
    <Modal transparent={true}>
      <TouchableOpacity style={styles.modalBg} onPress={toggleMenu}>
        <View style={styles.modalContainer(isDarkTheme)}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={item.onPress || (() => console.log("menu item"))}
              >
                <Image source={item.icon} style={styles.menuItemIcon} />
                <Text style={styles.menuText(isDarkTheme)}>{item.text}</Text>
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

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

const matchDispatchToProps = {
  toggleTheme,
};

export default connect(mapStateToProps, matchDispatchToProps)(Menu);

const styles = StyleSheet.create({
  modalBg: {
    ...StyleSheet.absoluteFillObject,
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  modalContainer: (isDarkTheme) => ({
    backgroundColor: isDarkTheme
      ? colors.menuBgColorDarkTheme
      : colors.menuBgColorLightTheme,
    position: "absolute",
    width: "40%",
    right: 0,
    top: "9%",
    marginRight: 16,
    borderRadius: 2,
  }),
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
  menuText: (isDarkMode) => ({
    color: isDarkMode ? colors.textColorDarkTheme : colors.textColorLightTheme,
    fontSize: 16,
  }),
  separator: {
    height: 1,
    width: "100%",
    backgroundColor: "#504F4F",
  },
});
