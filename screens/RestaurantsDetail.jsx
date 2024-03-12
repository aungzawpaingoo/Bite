import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import burgerImage from '../assets/burger.jpg'
import { TabBar } from 'react-native-tab-view';
import DiscountCard from '../components/DiscountCard';
import TrendingOrders from '../components/TrendingOrders';
import Menu from '../components/Menu';


const RestaurantsDetail = () => {


  const navigation = useNavigation();


  return (


    <View style={{backgroundColor:'white'}}>
    <ScrollView>
      
      
      <StatusBar translucent backgroundColor={'transparent'} />

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

                <MaterialCommunityIcons
                  name="google-maps"
                  color={"#EA1179"}
                  size={23}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray',marginRight:'5%'}}>2 - 2.5 km away</Text>

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
            
            <View style={{marginTop:'5%',marginBottom:'5%'}}>
            <DiscountCard />
            </View>

            <Text style={styles.subTitle}>Trending Orders</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '1%',marginTop:'1%',marginBottom:'5%' }}>
                <MaterialCommunityIcons
                  name="fire"
                  color={"#FAA300"}
                  size={24}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray',marginRight:'5%'}}>Trending orders for this week</Text>
            </View>

          <TrendingOrders/>

          <Text style={styles.subTitle}>Menu</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '1%',marginTop:'1%',marginBottom:'5%' }}>
                <MaterialCommunityIcons
                  name="silverware"
                  color={"#FAA300"}
                  size={24}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray',marginRight:'5%'}}>Feeling hungry? choose from our signature menu dishes</Text>
            </View>

          <Menu/>



            

              
              
           
    </ScrollView>
    </View>
  )
}

export default RestaurantsDetail

const styles = StyleSheet.create({
  bannerImage:{
    width:'full',
    height:240,
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
    fontSize:18,
    fontWeight:'700',
  },

  subTitle:{
    marginLeft:'3%',
    marginTop:'5%',
    fontSize:15,
    fontWeight:'700',
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