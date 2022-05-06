import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import RGoalItem from "./components/RGoalItem";
import RGoalInput from "./components/RGoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [relationshipGoals, setRelationshipGoals] = useState([]);
  function startAddGoalHandler() {
    setModalIsVisible(true);
  };

  function endAddGoalHandler() {
    setModalIsVisible(false);
  };


  const addGoalHandler = (goalTitle) => {
    setRelationshipGoals((currentRelationshipGoals) => [
      ...currentRelationshipGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);

    endAddGoalHandler();
  };

  function deleteGoalHandler(id) {
    setRelationshipGoals((currentRelationshipGoals) => {
      return currentRelationshipGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <> 
    <StatusBar style= "light"/>
    <View style={styles.screen}>
      <Button
        title="Add New Goal"
        color={"#a065ec"}
        onPress={startAddGoalHandler}
      />
      <RGoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style= {styles.goalsContainer}>
      <FlatList
        data={relationshipGoals}
        renderItem={(itemData) => {
          return (
          <RGoalItem
            onDelete={deleteGoalHandler}
            title={itemData.item.value}
            id={itemData.item.id}
          />
        )}}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        alwaysBounceVertical={false}
      />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignContent: "center",
   
  },

  goalsContainer: {
    flex:5,
   
  }
});
