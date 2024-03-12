import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MenuItemChoiceCard = () => {
  return (

    <View style={styles.card}>
      <Text>MenuItemChoiceCard</Text>
    </View>
  
  )
}

export default MenuItemChoiceCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'blue',
        width:'94%',
        alignSelf:'center',
        borderRadius:4, 
    }
})