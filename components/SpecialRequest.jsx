import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';


const SpecialRequest = () => {

    const [requestText, setRequestText] = useState('');

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Special Request</Text>

      <Text style={styles.description}>If you have any type of allergies or if you don't want to include
      certain type of item in the food pls leave a note here.</Text>


    <TextInput 
      label={"Special Request"}
      value={requestText}
      onChange={requestText => setRequestText(requestText)}
      mode="outlined"
      outlineColor='#E6E6E6'
      activeOutlineColor='gray'
      placeholder='For example, I am allergic to peanuts'
      style={styles.input}

    />

    </View>


  )
}

export default SpecialRequest

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