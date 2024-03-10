import { ImageBackground,StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from "react-native-vector-icons";
import burgerImage from '../assets/burger.jpg'
import springRoll from '../assets/springroll.jpg'
import sushi from '../assets/sushi.jpg'
import mouthinkar from '../assets/mouthinkar.jpg'
import chowmin from '../assets/chowmin.jpg'
import { useNavigation } from '@react-navigation/native';
import offerNearYou from '../data/offerNearYou';


const FavStores = () => {

  const navigation = useNavigation();


  return (

    
    <View style={styles.scrollView}>

        {offerNearYou.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => navigation.navigate('restaurantsDetail')}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.cardTitle}>{item.name}</Text>
              
              <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                <MaterialCommunityIcons
                  name="star"
                  color={"#FDE767"}
                  size={20}
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: 'gray' }}>{item.rating}</Text>
              </View>
              
              
              <View style={{ flexDirection: 'row', alignItems: 'center', margin: 5 }}>
                <MaterialCommunityIcons
                  name="bike-fast"
                  color={"#9BCF53"}
                  size={20}
                  style={{ marginRight: 5, marginLeft: 4 }}
                />
                <Text style={{ color: 'gray' }}>{item.duration}</Text>
              </View>
            </View>

            
          </TouchableOpacity>
        ))}


      </View>
    


  );
}

export default FavStores;

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row', 
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 4,
    elevation: 3,
    marginHorizontal: 8,
    marginVertical: 15,
  },
  image: {
    width: 260, 
    height: 150, 
    resizeMode:'cover',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  
  cardTitle:{
    fontSize:16,
    fontWeight:'500',
    marginTop:4,
    marginLeft:8,
  },

 


});
