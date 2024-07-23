import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { getFavoriteQuotes } from "../utils/helpers";
import ScreenLayout from "../components/ScreenLayout";
import colors from "../constants/colors";

const FavouriteQuotes = () => {
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const fetchFavQuotes = async () => {
    const favQuotes = await getFavoriteQuotes();
    setFavoriteQuotes(favQuotes);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchFavQuotes();
  }, [isFocused]);

  const renderFavoriteItem = ({ item, index }) => {
    const { message } = item;
    const backgroundColor =
      index % 2 === 0 ? colors.cardBgColorLightTheme : colors.cardBgGrey;

    return (
      <View style={[styles.card, { backgroundColor }]}>
        <Text style={styles.message} numberOfLines={3} ellipsizeMode="tail">
          {message}
        </Text>
        <View style={styles.flexRow}>
          <Text style={styles.date}>7 January</Text>
          <View style={styles.flexRow}>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/icons/forward-icon-white.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../assets/images/icons/delete-icon-white.png")}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScreenLayout>
      <View style={styles.headingWrapper}>
        <Text style={styles.screenHeading}>My Favourite Quotes</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList data={favoriteQuotes} renderItem={renderFavoriteItem} />
      </View>
    </ScreenLayout>
  );
};

export default FavouriteQuotes;

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.cardBgColorLightTheme,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
    marginVertical: 8,
  },
  message: {
    color: colors.white,
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 16,
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  date: {
    color: colors.white,
    fontSize: 12,
  },
  icon: {
    height: 20,
    width: 24,
    marginHorizontal: 8,
  },
  headingWrapper: {
    backgroundColor: colors.lightGreyLightTheme,
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
  },
  listContainer: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  screenHeading: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
