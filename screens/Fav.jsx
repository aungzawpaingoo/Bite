import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FavStores from '../components/FavStores';


const Fav = () => {

  const navigation = useNavigation();



  return (

    <>
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EA1179'}}>

    <MaterialCommunityIcons 
    name="arrow-left-circle"
    color={'white'}
    size={24}
    style={{width:40,height:40,borderRadius:100,marginLeft:'2%',marginTop:'2%'}}
    onPress={navigation.goBack}
    />

    <View style={{marginLeft:"2%",flex:1}}>
    <Text style={styles.locationValue}>Favorite Stores</Text>
    </View>
      

    


    <MaterialCommunityIcons
                name="cart"
                color={"white"}
                size={26}
                style={{marginRight:'3%'}}
                onPress={()=>navigation.navigate('cartScreen')}
              />
      </View>

      <ScrollView scrollEnabled={true}>
        <FavStores/>
      </ScrollView>



      </>
  )
}

export default Fav

const styles = StyleSheet.create({

locationValue:{ 
    fontSize:18,
    fontWeight:'bold',
    marginTop:'-2%',
    color:'white'
}, 
})