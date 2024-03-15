import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import burgerImage from '../assets/burger.jpg'
import { TabBar } from 'react-native-tab-view';
import DiscountCard from '../components/DiscountCard';
import TrendingOrders from '../components/TrendingOrders';
import Menu from '../components/Menu';
import MenuItemChoiceCard from '../components/MenuItemChoiceCard';
import FrequentlyPairedDishes from '../components/FrequentlyPairedDishes';
import SpecialRequest from '../components/SpecialRequest';
import OutOfMenuOption from '../components/OutOfMenuOption';
import ChooseAndNext from '../components/ChooseAndNext';


const MenuDetail = () => {


  const navigation = useNavigation();


  return (


    <View style={{flex:1,backgroundColor:'white'}}>
    <ScrollView style={{marginTop:'4%'}}>
      
      
    <StatusBar backgroundColor={'#B80000'} />
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

        
         <View style={{flexDirection:'row',alignItems:'center'}}> 
          <Text style={styles.title}>KFC South Dagon</Text>
          <Text style={styles.price}>Duration 20 mins to 30 mins </Text>
          </View>

          <Text style={styles.menuDescription}>With Special Burger Sauce</Text>


          <MenuItemChoiceCard/>

          <FrequentlyPairedDishes />

          <SpecialRequest />

          <OutOfMenuOption />

          <ChooseAndNext />

          



            

              
              
           
    </ScrollView>
    </View>
  )
}

export default MenuDetail

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
    marginTop:'5%',
    fontSize:20,
    fontWeight:'700',
  },

  price:{
    marginLeft:'14%',
    marginTop:'5%',
    fontSize:13,
    fontWeight:'400',
    color:'gray',
  },

  menuDescription:{
    marginLeft:'3%',
    marginTop:'5%',
    marginBottom:'10%',
    fontSize:13,
    color:'gray'
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