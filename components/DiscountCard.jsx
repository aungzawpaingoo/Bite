import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";


const DiscountCard = () => {
  return (

    <TouchableOpacity>

    <View style={styles.card}>
     
     <View style={{flexDirection:'row'}}>
     <MaterialCommunityIcons
                  name="sale"
                  color={"#B80000"}
                  size={20}
                  style={{margin:'2%',}}
                  onPress={() => navigation.goBack()}
                />
    <Text style={{marginLeft:'0.5%',marginTop:'2%',fontSize:14,fontWeight:'500'}}>10% Discount</Text>
     </View>
    
    <Text style={{marginLeft:'3%',marginBottom:'2.2%',color:'black',fontSize:12}}>For every orders above 10,000 ks you can get 10% discount.</Text>

    </View>

    </TouchableOpacity>


  )
}

export default DiscountCard

const styles = StyleSheet.create({
    card :{
        width:'95%',
        height:'auto',
        borderRadius:5,
        backgroundColor:'#E1AFD1',
        alignSelf:'center',
        margin:'3%'
    }
})