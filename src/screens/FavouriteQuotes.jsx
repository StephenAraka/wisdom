import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useIsFocused } from '@react-navigation/native';
import { getFavoriteQuotes } from "../utils/helpers";

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
      <View style={{ width: '100%' }}>
        <Text style={{ color: 'black' }}>{message}</Text>
      </View>
    );
  }
  
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList data={favoriteQuotes} renderItem={renderFavoriteItem} />
    </View>
  );
};

export default FavouriteQuotes;

const styles = StyleSheet.create({});
