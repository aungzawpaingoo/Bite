import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';


const MenuItemChoiceCard = () => {

  const [selectedSize, setSelectedSize] = React.useState(null);

  const handleSelect = (size) => {
    setSelectedSize(size);
  };



  return (

    <View style={styles.card}>
      <Text style={styles.title}>Here are the Varieties</Text>
      <Text style={styles.description}>You can choose as you like</Text>

      <View style={styles.choice}>
        <RadioButton
          status={selectedSize === 'small' ? 'checked' : 'unchecked'} 
          onPress={() => handleSelect('small')} 
          color='#B80000'
        />
        <Text>Small</Text>
        <Text style={{marginLeft:'55%'}}>MMK 3,000</Text>
      </View>


      <View style={styles.choice}>
        <RadioButton
          status={selectedSize === 'medium' ? 'checked' : 'unchecked'} 
          onPress={() => handleSelect('medium')}
          color='#B80000'
        />
        <Text>Medium</Text>
        <Text style={{marginLeft:'51%'}}>MMK 4,000</Text>
      </View>


      <View style={styles.choice}>
        <RadioButton
          status={selectedSize === 'large' ? 'checked' : 'unchecked'} 
          onPress={() => handleSelect('large')} 
          color='#B80000'
        />
        <Text>Large</Text>
        <Text style={{marginLeft:'55%'}}>MMK 5,000</Text>
      </View>


    </View>
  )
}


export default MenuItemChoiceCard

const styles = StyleSheet.create({
    card:{
        backgroundColor:'white',
        width:'94%',
        alignSelf:'center',
        borderRadius:15, 
        borderColor:'#E6E6E6',
        borderWidth:1,
        padding:'4%',
    },

    choice:{
      flexDirection:'row',
      alignItems:'center',
      marginTop:'4%'
    },

    title:{
      fontSize:18,
      fontWeight:'700',
    },

    description:{
      fontSize:14,
      fontWeight:'400',
      color:'gray',
      marginTop:'3%',
    }
})