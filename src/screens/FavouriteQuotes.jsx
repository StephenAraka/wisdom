import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { getFavoriteQuotes } from "../utils/helpers";
import ScreenLayout from "../components/ScreenLayout";
import colors from "../constants/colors";

const FavouriteQuotes = () => {
  const [favoriteQuotes, setFavoriteQuotes] = useState([]);

  const fetchFavQuotes = async () => {
    const favQuotes = await getFavoriteQuotes();
    setFavoriteQuotes(favQuotes);
  }

  const isFocused = useIsFocused();

  useEffect(() => {
    fetchFavQuotes();
  }, [isFocused]);

  const renderFavoriteItem = ({ item }) => {
    const { message } = item;

    return (
      <View style={styles.card}>
        <Text style={{ color: 'black' }}>{message}</Text>
      </View>
    );
  }
  
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
    backgroundColor: colors.white,
    borderColor: colors.lightGreyLightTheme,
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  headingWrapper: {
    backgroundColor: colors.lightGreyLightTheme,
    display: 'flex',
    alignItems: 'center',
    paddingVertical: 8,
  },
  listContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  screenHeading: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
