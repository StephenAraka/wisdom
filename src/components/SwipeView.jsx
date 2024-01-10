import React from "react";
import { View, TouchableOpacity } from "react-native";

const SwipeView = ({
  children,
  activeSubQuote,
  setActiveSubQuote,
  arrayLength,
}) => {
  console.log("====================================");
  console.log(arrayLength);
  console.log("====================================");
  const handleLeftTap = () => {
    if (activeSubQuote == 0) {
      return;
    } else {
      setActiveSubQuote((prev) => prev - 1);
    }
    // Add your left tap logic here
  };

  const handleRightTap = () => {
    console.log("Right Tap detected!");
    console.log("====================================");
    console.log(activeSubQuote);
    console.log("====================================");
    if (activeSubQuote == arrayLength) {
      return;
    } else {
      setActiveSubQuote((prev) => prev + 1);
    }
    // Add your right tap logic here
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
        }}
      />
      {children}
    </View>
  );
};

export default SwipeView;
