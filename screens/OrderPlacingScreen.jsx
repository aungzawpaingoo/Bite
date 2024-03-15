import { StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Stepper from '../components/Stepper';
import OrderTimeCard from '../components/OrderTimeCard';
import OrderListItem from '../components/OrderListItem';



const OrderPlacingScreen = () => {

  return (

    <View style={{flex:1,backgroundColor:'white'}}>
    <ScrollView style={{marginTop:'4%'}}>
      
      
    <StatusBar backgroundColor={'#B80000'} />


    <View style={styles.topInfoBar}>

    <View>
     
          <MaterialCommunityIcons
                  name="close"
                  color={"black"}
                  size={30}
                  style={styles.arrow}
                  onPress={() => navigation.goBack()}
                />
     </View>

     <View>
        <Text style={styles.title}>Cart</Text>
        <Text style={styles.shopName}>KFC (South Dagon)</Text>
     </View>
     
    </View>


    <Stepper/>

    <OrderTimeCard/>

    <OrderListItem />



    </ScrollView>
    </View>

  )
}

export default OrderPlacingScreen

const styles = StyleSheet.create({
    topInfoBar:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'white',
        marginTop:'4%',
        marginLeft:'5%',
        alignSelf:'center',
        width:'95%',
        marginRight:'5%'
    },

    title:{
        fontSize:18,
        marginLeft:'5%',
        fontWeight:'600',

    },

    shopName:{
        fontSize:14,
        marginLeft:'5%',
        marginTop:'2%'
    }
})