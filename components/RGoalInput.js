import React, { useState } from "react";
import { View, Button, StyleSheet, TextInput, Modal, Image } from "react-native";
const RGoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput
          placeholder="Relationship Goals"
          style={styles.textinput}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
         <View style={styles.buttons}>
        <Button title="Cancel"  onPress={props.onCancel} color= "#f31282"/>
        </View>
         <View style={styles.buttons}>
        <Button title="Add Goal" onPress={addGoalHandler} color= "#b180f0"/>
        </View>
        
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textinput: {
    borderWidth: 1,
    padding: 14,
    width: "100%",
    color: "#120438",
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
    padding: 16,
    borderBottomColor: "black",
    backgroundColor: "#311b6b",
    
  },
  buttonContainer: {
    flexDirection:"row",
    marginTop: 16,
  },
  buttons: {
    width: 100,
    marginHorizontal: 8
  },

  image: {
    width: 100,
    height: 100,
    margin: 20,
  }
});

export default RGoalInput;
