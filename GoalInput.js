import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native'
import React from 'react'
function GoalInput(props) {
      const [enteredGoalText, setEnteredGoalText] = React.useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }
    return(
        <Modal visible = {props.visible} animationType='slide'>
        <View style={style.inputContainer}>
            <Image style = {style.image}source = {require('../assets/images/goal.png')} />
        <TextInput
          style={style.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value = {enteredGoalText}
        />
        <View style={style.buttonContain}>
            <View style = {style.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color = '#90EE90' />
            </View>
            <View style = {style.button}>
            <Button title = 'Cancel' color = 'red' onPress={props.onCancel}/>
            </View>
        </View>
        
      </View>
      </Modal>
    )
}
const style = StyleSheet.create({
inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
 backgroundColor: '#120438'
  },
  textInput: {
    borderWidth: 3,
    borderRadius: 100,
    borderColor: '#fbf9f9ff',
    backgroundColor: '#fbf9f9ff',
    color: '#120438',
    borderRadius: 100,
    width: '100%',
    marginRight: 10,
    padding: 16,
  },
  buttonContain: {
       flexDirection: 'row',
       marginTop: 16
  },
  button:{
    width: 100,
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20
  }
})
export default GoalInput