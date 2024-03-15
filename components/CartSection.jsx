import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import offerNearYou from '../data/offerNearYou';

const CartSection = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {offerNearYou.map((item) => (
        <TouchableOpacity key={item.id} disabled>
        
          
          <View style={styles.card}>
            
            <View style={{flexDirection:'row',alignItems:'center'}}>

            <View>
            <Image source={item.image} style={styles.image} />
            </View>

           
            <View>
            <Text style={styles.cardTitle}>Sushi Mixed Box</Text>
            <Text style={styles.cardTitle2}>Total : 5000 Ks</Text>
            <Text style={styles.cardTitle2}>Duration : 25 mins to 30 mins</Text>
            </View>

            <View>
            <MaterialCommunityIcons name="delete" color="#B80000" size={30} style={styles.icon} onPress={()=>Alert.alert('Delete')} />
            </View>

            </View>
            
            
            
            </View>


        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default CartSection;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 6,
    elevation: 5,
    marginHorizontal: 8,
    marginVertical: 10,
    flexDirection:'row',
    height:100
  },
  image: {
    width: 60,
    height: 60,
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
