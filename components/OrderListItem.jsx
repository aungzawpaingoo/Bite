import { StyleSheet, Text, View,ScrollView, Image } from 'react-native'
import React from 'react'
import fries from '../assets/frensh-fries.jpg'
import { Button } from 'react-native-paper'



const OrderListItem = () => {


  return (

    <ScrollView>
   
   <View style={styles.choice}>

        <Button style={styles.btn}>1</Button>

        <Image source={fries} style={styles.image}/>
        <Text style={{marginLeft:'3%'}}>Fries</Text>
        <Text style={{marginLeft:'28%'}}>MMK 3,000</Text>
      </View>

      <View style={styles.choice}>

        <Button style={styles.btn}>1</Button>

        <Image source={fries} style={styles.image}/>
        <Text style={{marginLeft:'3%'}}>Fries</Text>
        <Text style={{marginLeft:'28%'}}>MMK 3,000</Text>
      </View>
      

    </ScrollView>
 
 )
}

export default OrderListItem

const styles = StyleSheet.create({
    choice:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'4%',
        backgroundColor:'white',
        width:'99%',
        alignSelf:'center',
      },

      image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 6,
        marginLeft:'0%',
        alignSelf:'center'
      },

      btn:{
        borderColor:'#B80000',
        borderWidth:1,
        borderRadius:4,
        backgroundColor:'white',
        marginRight:'5%',
        marginLeft:'2%',
      }
})