import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

const RGoalItem = (props) => {
  return (
    <View style={styles.rgList}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        activeOpacity={0.7}
        onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedItem}
      >
        <Text>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  rgList: {
    flex: 1,
    margin: 5,
    padding: 10,
    borderTopColor: "black",
    borderColor: "black",
    backgroundColor: "#5e0acc",
    borderWidth: 1,
    color: "#000",
    width: "100%",
    marginTop: 5,
    alignContent: "center",
    shadowColor: "black",
    

  },
  goalText: {
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
export default RGoalItem;
