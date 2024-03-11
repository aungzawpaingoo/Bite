import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import offerNearYou from '../data/offerNearYou';

const FavStores = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {offerNearYou.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => navigation.navigate('restaurantsDetail')}>
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.cardTitle}>{item.name}</Text>

            <View style={styles.row}>
              <MaterialCommunityIcons name="star" color="#FDE767" size={20} style={styles.icon} />
              <Text style={styles.text}>{item.rating}</Text>
            </View>

            <View style={styles.row}>
              <MaterialCommunityIcons name="bike-fast" color="#9BCF53" size={20} style={styles.icon} />
              <Text style={styles.text}>{item.duration}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default FavStores;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 3,
    marginHorizontal: 8,
    marginVertical: 15,
  },
  image: {
    width: "full",
    height: 180,
    resizeMode: 'cover',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 4,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: 'gray',
  },
});
