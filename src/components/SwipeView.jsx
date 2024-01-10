import React from "react";
import { View, TouchableOpacity } from "react-native";

const SwipeView = ({
  children,
  activeSubQuote,
  setActiveSubQuote,
  subQuoteLength,
}) => {
  const handleLeftTap = () => {
    /* Ensuring the left tap tap doesn't go below the first status*/
    if (activeSubQuote == 0) {
      return;
    } else {
      setActiveSubQuote((prev) => prev - 1);
    }
  };

  const handleRightTap = () => {
    /* Ensuring the right tap doesn't exceed the number of statuses*/
    if (activeSubQuote == subQuoteLength) {
      return;
    } else {
      setActiveSubQuote((prev) => prev + 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={handleLeftTap}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "50%",
          zIndex: 100,
        }}
      />
      <TouchableOpacity
        onPress={handleRightTap}
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "50%",
          zIndex: 100,
        }}
      />
      {children}
    </View>
  );
};

export default SwipeView;
