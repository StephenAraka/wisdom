import React, { useRef } from 'react';
import { View, Text, PanResponder } from 'react-native';

const SwipeView = ({ children }) => {
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        // Access the horizontal move distance
        const { dx } = gestureState;

        // Handle left swipe
        if (dx < -50) {
          console.log('Left swipe detected!');
          // Add your left swipe logic here
        }

        // Handle right swipe
        if (dx > 50) {
          console.log('Right swipe detected!');
          // Add your right swipe logic here
        }
      },
      onPanResponderRelease: () => {
        // Reset any necessary state or perform additional actions on gesture release
      },
    })
  ).current;

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      {...panResponder.panHandlers}
    >
      {children}
    </View>
  );
};

export default SwipeView;
