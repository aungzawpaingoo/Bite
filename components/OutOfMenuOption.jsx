import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';


const OutOfMenuOption = () => {

    const [dishText, setDishText] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.title}>If the dish is not available</Text>

      <Text style={styles.description}>If the dish is not available you can include an alternative dish of your choice here.</Text>


    <TextInput 
      label={"Alternative Dish"}
      value={dishText}
      onChange={dishText => setDishText(dishText)}
      mode="outlined"
      outlineColor='#E6E6E6'
      activeOutlineColor='gray'
      style={styles.input}

    />

    </View>


  )
}

export default OutOfMenuOption

const styles = StyleSheet.create({
    container:{
        padding:'0%',
        marginTop:'8%',
        backgroundColor:'white',
        width:'95%',
        alignSelf:'center'
    },

    title:{
        fontSize:18,
        fontWeight:'700',
      },
  
      description:{
        fontSize:14,
        fontWeight:'400',
        color:'gray',
        marginTop:'2%',
        marginBottom:'4%'
      },

    input:{
        height:60,
        width:'100%',
        alignSelf:'center',
        borderColor:'#E6E6E6',
        backgroundColor:'white',
        fontSize:14,
        color:'black'

    }
})