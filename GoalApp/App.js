import { useState } from 'react';
import {StatusBar} from 'expo-status-bar'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button, 
} from 'react-native';
 import GoalItem from './components/GoalItem'
 import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false)

function startAddGoalHandler() {
  setModalVisible(true)
}
function endAddGoalHandler(){
    setModalVisible(false)
}
  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setModalVisible(false)
  }

  function deleteGoalHandler(id){
  setCourseGoals(currentCourseGoals => {
    return currentCourseGoals.filter((goal) => goal.id !== id)
  })
  }
  return (
    <>
    <StatusBar style = 'light'/>
    <View style={styles.appContainer}>
    <GoalInput visible = {modalVisible} onAddGoal={addGoalHandler} onCancel = {endAddGoalHandler} />
      <View style={styles.goalsContainer}>
        <Text style = {styles.GoalsText}>Your Main Goal's 💪:</Text>
        <Button title = 'Add New Goal' color = '#90EE90' onPress = {startAddGoalHandler}/>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text = {itemData.item.text} id = {itemData.item.id} onDeleteItem = {deleteGoalHandler}/>
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}
const styles = StyleSheet.create({
  appContainer: {
    flex: 5,
    paddingTop: 200,
    paddingHorizontal: 20,
    backgroundColor: '#120438',
  },
  goalsContainer: {
    flex: 5,
  },
  GoalsText: {
    textAlign: 'center',
    fontFamily: "Gill Sans",
    fontSize: 40,
     color: 'white'
  },
  
});
