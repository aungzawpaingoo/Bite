import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import FavStores from '../components/FavStores';
import DishesFilterTab from '../components/DishesFilterTab';



const CategoryRouteScreen = () => {


  const navigation = useNavigation();



  return (

    <>
    <View style={{flex:1,backgroundColor:'white'}}>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#B80000'}}>

<MaterialCommunityIcons 
name="arrow-left-circle"
color={'white'}
size={24}
style={{width:40,height:40,borderRadius:100,marginLeft:'2%',marginTop:'2%'}}
onPress={navigation.goBack}
/>

<View style={{marginLeft:"2%",flex:1}}>
<Text style={styles.locationValue}>Dishes</Text>
</View>

  </View>
  
  <DishesFilterTab/>

  <FavStores/>

    </View>
    </>
  )
}

export default CategoryRouteScreen

const styles = StyleSheet.create({
  locationValue:{ 
    fontSize:18,
    fontWeight:'bold',
    marginTop:'-2%',
    color:'white'
}, 
})