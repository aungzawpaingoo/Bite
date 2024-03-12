import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import offerNearYou from '../data/offerNearYou';

const Menu = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {offerNearYou.map((item) => (
        <TouchableOpacity key={item.id} disabled>
        
          
          <View style={styles.card}>
            
            
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
            
            <View>
            <Image source={item.image} style={styles.image} />
            </View>

           
            <View style={{marginLeft:'10%',marginTop:'-3%'}}>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardTitle2}>{item.duration}</Text>
            <Text style={styles.cardTitle2}>{item.rating}</Text>
            </View>

            
            </TouchableOpacity>
            
            
            
            </View>


        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 6,
    marginHorizontal: 8,
    marginVertical: 4,
    flexDirection:'row',
    height:100
  },
  image: {
    width: 80,
    height: 70,
    resizeMode: 'cover',
    borderRadius: 6,
    marginLeft:'4%',
    alignSelf:'center'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
    marginLeft: 8,
  },
  cardTitle2: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
    marginLeft: 8,
    color:'gray'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  icon: {
    marginLeft: '26%',
    alignSelf:'center'
  },
  text: {
    color: 'gray',
  },
});
