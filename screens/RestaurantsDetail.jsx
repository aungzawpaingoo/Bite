import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import burgerImage from '../assets/burger.jpg'
import { TabBar } from 'react-native-tab-view';


const RestaurantsDetail = () => {


  const navigation = useNavigation();


  return (



    <View>

      <StatusBar backgroundColor={'#EA1179'} />

      <View style={{position:'relative'}}>
      <Image source={burgerImage} style={styles.bannerImage}/>
      </View>

      <MaterialCommunityIcons
                  name="arrow-left-circle"
                  color={"white"}
                  size={30}
                  style={styles.arrow}
                  onPress={() => navigation.goBack()}
                />

        
          <Text style={styles.title}>KFC South Dagon</Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '1.8%',marginTop:'3%' }}>
                <MaterialCommunityIcons
                  name="cash-fast"
                  color={"#EA1179"}
                  size={23}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray',marginRight:'5%'}}>500 delivery charge</Text>
            </View>
         
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '1.8%',marginTop:'3%' }}>
                <MaterialCommunityIcons
                  name="star"
                  color={"#EA1179"}
                  size={23}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray',marginRight:'5%'}}>4.5 stars rating</Text>

                <MaterialCommunityIcons
                  name="bike-fast"
                  color={"#EA1179"}
                  size={20}
                  style={{ marginRight: 8, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray' }}>25 mins to 30 mins</Text>
              </View>

              
              

    </View>
  )
}

export default RestaurantsDetail

const styles = StyleSheet.create({
  bannerImage:{
    width:'full',
    height:220,
    resizeMode:'cover',
    opacity:0.9,
  },

  arrow:{
    position:'absolute',
    top:15,
    left:10,
  },

  title:{
    marginLeft:'3%',
    marginTop:'2%',
    fontSize:19,
    fontWeight:'600',
  },

  infoBar:{
      flexDirection:'row',
      marginLeft:'3%',
      marginTop:'3%'
  },

  description:{
    marginLeft:'3%',
    marginTop:'3%',
    fontSize:13,
    fontWeight:'400',
    color:'gray',
    
    
  }
})