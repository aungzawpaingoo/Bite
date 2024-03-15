import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const ChooseAndNext = () => {
  

  const navigation = useNavigation();

  const [quantity , setQuantity ] = useState(0);

  const handleQuantiyChange  = (change) => {
    const newQuantity = Math.max(0, quantity + change);
    setQuantity(newQuantity);
  };

  const isAddtoCartDisabled = quantity === 0;
  const minusIconColor = quantity === 0 ? 'gray' : '#B80000';


  return (


    <View style={styles.container}>

      <View style={styles.choiceMenu}>

      <MaterialCommunityIcons
                  name="minus-box"
                  color={minusIconColor}
                  size={35}
                  style={styles.arrow}
                  onPress={()=> handleQuantiyChange(-1)}
                />

      <Text style={styles.count}>{quantity}</Text>

      <MaterialCommunityIcons
                  name="plus-box"
                  color={"#B80000"}
                  size={35}
                  style={styles.arrow}
                  onPress={()=> handleQuantiyChange(1)}
                />

      <Button 
      mode="contained" 
      buttonColor={'#B80000'}
      textColor='white'
      style={styles.button}
      disabled={isAddtoCartDisabled}
      onPress={()=>navigation.navigate('cartScreen')}
      >Go to Cart</Button>

      </View>    

    </View>


  )
}

export default ChooseAndNext

const styles = StyleSheet.create({
  container:{
    padding:'0%',
    marginTop:'8%',
    marginBottom:'6%',
    backgroundColor:'white',
    width:'100%',
    alignSelf:'center'
},

choiceMenu:{
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-evenly',
},

button:{
  width:'40%',
  height:40,
  alignSelf:'center',
  borderRadius:6
},

count:{
  fontSize:18,
  fontWeight:'600',
}

})