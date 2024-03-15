import { Alert, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import burgerImage from '../assets/burger.jpg'
import bubbleTea from '../assets/bubbleTea.jpg'
import chowmin from '../assets/chowmin.jpg'
import indian from '../assets/indian.jpg'
import japanese from '../assets/japanese.jpg'
import korean from '../assets/korean.jpg'
import { useNavigation } from '@react-navigation/native'


const TrendingOrders = () => {

  const navigation = useNavigation()


  return (
 <>
    


<View style={styles.card}>
   
   <TouchableOpacity onPress={()=> navigation.navigate('menuDetail')}>
   <View>
   <Image source={burgerImage} style={styles.imageCard} />
   <Text style={styles.label}>Burger</Text>
   </View>
   </TouchableOpacity>
   
   <TouchableOpacity>
   <View>
   <Image source={bubbleTea} style={styles.imageCard} />
   <Text style={styles.label}>Bubble Tea</Text>
   </View>
   </TouchableOpacity>

 </View>


 <View style={styles.card}>
   
 <TouchableOpacity onPress={()=> navigation.navigate('menuDetail')}>
   <View>
   <Image source={japanese} style={styles.imageCard} />
   <Text style={styles.label}>Sushi</Text>
   </View>
   </TouchableOpacity>
   

   <TouchableOpacity onPress={()=> navigation.navigate('menuDetail')}>
   <View>
   <Image source={indian} style={styles.imageCard} />
   <Text style={styles.label}>Indian</Text>
   </View>
   </TouchableOpacity>

 </View>



 

</>
    


  )
}

export default TrendingOrders

const styles = StyleSheet.create({
    card:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%',
        alignSelf:'center',
        marginTop:'2%',
        marginBottom:'4%',
    },

    imageCard:{
        width:150,
        height:120,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
    },

    label:{
        textAlign:'center',
        width:151,
        marginTop:'-2%',
        elevation:1,
        alignSelf:'center',
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8,

        
    }

})