import { StyleSheet, Text, View,Image, ScrollView, StatusBar, Alert,ImageBackground } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Searchbar } from 'react-native-paper';
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Categories from '../components/Categories';
import Features from '../components/Features'
import OfferNearYou from '../components/OffersNearYou';
import DiscountsForYou from '../components/DiscountsForYou';
import { Drawer } from 'react-native-paper';
import mapImage from '../assets/mapBackground.png'









const HomeScreen = () => {
     

    const [searchQuery, setSearchQuery] = React.useState('');




   const navigation = useNavigation()

   useLayoutEffect(() => { 
        navigation.setOptions({headerShown:false})
   }, [])

   const openDrawer = () => {
    navigation.openDrawer(); 
};



  return (

    <SafeAreaView style={{backgroundColor:'white'}}>
    <ScrollView>
    
    <StatusBar backgroundColor={'#EA1179'} />
    
    <View style={{flexDirection:'row',alignItems:'center',backgroundColor:'#EA1179'}}>

    <MaterialCommunityIcons 
    name="menu"
    color={'white'}
    size={30}
    style={{width:40,height:40,borderRadius:100,marginLeft:'2%',marginTop:'2%'}}
    onPress={()=>openDrawer}
    />

    <View style={{marginLeft:"2%",flex:1}}>
    <Text style={styles.profileName}>Aung Zaw Paing Oo</Text>
    <Text style={styles.locationValue}>Current Location</Text>
    </View>
      

    <MaterialCommunityIcons
                name="heart"
                color={"white"}
                size={26}
                style={{marginRight:'5%'}}
                onPress={()=>navigation.navigate('favScreen')}
              />


    <MaterialCommunityIcons
                name="cart"
                color={"white"}
                size={26}
                style={{marginRight:'3%'}}
                onPress={()=>navigation.navigate('cartScreen')}
              />
      </View>



      <View style={styles.searchContainer}>
      <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={styles.searchBar}
    />

    
    </View>


    
    <Text style={styles.title}>Categories</Text>
   
    
    <Categories/>


    <Text style={styles.title}>Offers Near You</Text>
    <Text style={styles.description}>Why not support your local restaurant today</Text>
    <ImageBackground source={mapImage} style={{ opacity: 1 }}>
    <OfferNearYou/>
    </ImageBackground>

    

    <Text style={styles.title}>Discounts For You</Text>
    <Text style={styles.description}>Why not support your local restaurant today</Text>

    <DiscountsForYou/>


    <Text style={styles.title}>Features</Text>
    <Text style={styles.description}>Why not support your local restaurant today</Text>

    <Features/>
    
    
    
   
    </ScrollView>
   
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    profileName:{
        fontSize:13,
        marginTop:1,
        color:'white'
    },

    locationValue:{ 
        fontSize:16,
        fontWeight:'bold',
        marginTop:4,
        color:'white'
    }, 

    title:{
      fontSize:19,
      fontWeight:'700',
      marginTop:'5%',
      marginLeft:'2%'

    },

    description:{
      fontSize:14,
      marginTop:'2%',
      marginLeft:'2.4%',
      marginBottom:'4%',
      color:'gray'

    },

    searchBar:{
        backgroundColor:'white',
        marginTop:'4%',
        marginLeft:'3%',
        width:'95%',
        justifyContent:'center',
        borderRadius:100,
        marginBottom:'5%'
      
    },

    searchContainer:{
      
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      backgroundColor:'#EA1179'
      
    }




})