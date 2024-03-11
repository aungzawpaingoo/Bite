import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import categoriesData from '../data/categoriesData';

const Categories = () => {
  const navigation = useNavigation();

  const handleCategoryPress = (categoryId) => {

    navigation.navigate('categoryRoute')
    
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {categoriesData.map((category) => (
        <TouchableOpacity key={category.id} onPress={() => handleCategoryPress(category.id)}>
          <View style={styles.card}>
            <Image source={category.image} style={styles.image} />
            <Text style={styles.text}>{category.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

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
    width: 110,
    height: 80,
    resizeMode: 'cover',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  text: {
    fontSize: 13,
    alignItems: 'center',
    color: '#333',
    padding: 1,
    textAlign: 'center',
  },
});

export default Categories;
