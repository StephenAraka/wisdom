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
import {
  getFavoriteQuotes,
  numberOfDay,
  removeFavoriteQuote,
  shareQuote,
} from "../utils/helpers";
import ScreenLayout from "../components/ScreenLayout";
import colors from "../constants/colors";

import { connect } from "react-redux";

const FavouriteQuotes = ({ isDarkTheme }) => {
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const fetchFavQuotes = async () => {
    const favQuotes = await getFavoriteQuotes();
    setFavoriteQuotes(favQuotes);
  };

  const shareFavQuote = (quote) => {
    shareQuote(quote);
  };

  const removeFavQuote = async (item) => {
    await removeFavoriteQuote(item);
    fetchFavQuotes();
  };

  const handlePress = (item) => {
    numberOfDay(item.date);

    //console.log(item);
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchFavQuotes();
  }, [isFocused]);

  const renderFavoriteItem = ({ item, index }) => {
    const { message, date } = item;
    const backgroundColor = isDarkTheme
      ? index % 2 === 0
        ? colors.cardBgBlueDarkTheme
        : colors.cardBgGreyDarkTheme
      : index % 2 === 0
      ? colors.cardBgGrey
      : colors.cardBgColorLightTheme;

    return (
      <TouchableOpacity onPress={() => handlePress(item)}>
        <View style={[styles.card, { backgroundColor }]}>
          <Text style={styles.message} numberOfLines={3} ellipsizeMode="tail">
            {message}
          </Text>
          <View style={styles.flexRow}>
            <Text style={styles.date}>{date}</Text>
            <View style={styles.flexRow}>
              {/* Icon to share a quote */}
              <TouchableOpacity onPress={() => shareFavQuote(item)}>
                <Image
                  source={require("../assets/images/icons/forward-icon-white.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>

              {/* Icon to remove quote from favorites */}
              <TouchableOpacity onPress={() => removeFavQuote(item)}>
                <Image
                  source={require("../assets/images/icons/delete-icon-white.png")}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenLayout>
      <View style={styles.headingWrapper(isDarkTheme)}>
        <Text style={styles.screenHeading(isDarkTheme)}>
          My Favourite Quotes
        </Text>
      </View>
      <View style={styles.listContainer}>
        {favoriteQuotes ? (
          <FlatList data={favoriteQuotes} renderItem={renderFavoriteItem} />
        ) : (
          <Text style={styles.emptyListMessage(isDarkTheme)}>
            You don't have any liked quotes. Like a quote to see your liked
            quotes here.
          </Text>
        )}
      </View>
    </ScreenLayout>
  );
};

const mapStateToProps = (state) => ({
  isDarkTheme: state.theme.isDarkTheme,
});

export default connect(mapStateToProps)(FavouriteQuotes);

const styles = StyleSheet.create({
  card: {
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
  headingWrapper: (isDarkTheme) => ({
    backgroundColor: isDarkTheme
      ? colors.menuBgColorDarkTheme
      : colors.lightGreyLightTheme,
    display: "flex",
    alignItems: "center",
    paddingVertical: 8,
  }),
  listContainer: {
    display: "flex",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  screenHeading: (isDarkTheme) => ({
    color: isDarkTheme ? colors.white : "#000000",
    fontSize: 16,
    fontWeight: "bold",
  }),
  emptyListMessage: (isDarkTheme) => ({
    color: isDarkTheme ? colors.white : "#000000",
    fontSize: 16,
    fontWeight: "light",
  }),
});
