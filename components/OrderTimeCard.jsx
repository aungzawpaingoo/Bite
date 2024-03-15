import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import popcornChicken from '../assets/popCornChicken.jpg'


const OrderTimeCard = () => {
  return (


    <View style={styles.card}>
 
      <View style={styles.cardContent}>

      <View>
      <Image source={popcornChicken} style={styles.image} />
      </View>

      <View>
      <Text style={styles.label1}>Estimated Time to Delivery</Text>
      <Text style={styles.label2}>(25 mins - 40 mins)</Text>
      <Text style={styles.label3}>Change</Text>
      </View>

      </View>

    </View>


  )
}

export default OrderTimeCard

const styles = StyleSheet.create({

    card:{
        width:'95%',
        alignSelf:'center',
        backgroundColor:'white',
        marginTop:'5%',
        paddingTop:'5%',
        paddingBottom:'5%',
        borderRadius:10,
        borderColor:'#E6E6E6',
        borderWidth:0.8,
        marginBottom:'3%'
    },

    image: {
        width: 75,
        height: 75,
        resizeMode: 'cover',
        borderRadius: 6,
        marginLeft:'4%',
        marginRight:'4%',
        alignSelf:'center'
      },

    cardContent:{
        flexDirection:'row',
        marginLeft:'3%',
        alignItems:'center'
    },

    label1:{
        fontSize:15,
        color:'gray',
        marginTop:'2%',
        marginBottom:'2%'
    },

    
    label2:{
        fontSize:20,
        color:'black',
        fontWeight:'500',
        marginTop:'2%',
        marginBottom:'2%'
    },

    
    label3:{
        fontSize:15,
        color:'gray',
        marginTop:'2%',
        marginBottom:'2%'
    }

})