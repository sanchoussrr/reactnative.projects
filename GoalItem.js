import {StyleSheet, View, Text, Pressable} from 'react-native'
function GoalItem(props) {
    return(
         <View style={styles.goalItem}>
            <Pressable android_ripple = {{color: 'red'}} onPress = {props.onDeleteItem.bind(this, props.id)} style = {({pressed}) => pressed && styles.preesedItem}> 
             <Text style={styles.goalText}>{props.text}</Text>
             </Pressable>
         </View>
        
    )
}
export default GoalItem
const styles = StyleSheet.create({ 
    goalItem: {
    margin: 8,
    borderRadius: 100,
    backgroundColor: '#c20ce6ff',
  },
  preesedItem:{
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    fontFamily: "Gill Sans",
    fontSize: 20,
    padding: 8,

  },
})