import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const DishesFilterTab = () => {
  const [focusedButton, setFocusedButton] = useState("Order Method");

  const handleButtonPress = (buttonName) => {
    setFocusedButton(buttonName);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Order Method' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Order Method')}
          textColor={focusedButton === 'Order Method' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Order Method' && styles.focusedButton]}
        >
          Order Method
        </Button>

        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Meal Option' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Meal Option')}
          textColor={focusedButton === 'Meal Option' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Meal Option' && styles.focusedButton]}
        >
          Meal Option
        </Button>

        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Rating' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Rating')}
          textColor={focusedButton === 'Rating' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Rating' && styles.focusedButton]}
        >
          Rating
        </Button>

        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Offers' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Offers')}
          textColor={focusedButton === 'Offers' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Offers' && styles.focusedButton]}
        >
          Offers
        </Button>

        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Price' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Price')}
          textColor={focusedButton === 'Price' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Price' && styles.focusedButton]}
        >
          Price
        </Button>

        
      </View>
    </ScrollView>
  );
};

export default DishesFilterTab;

const styles = StyleSheet.create({
  scrollView: {
    maxHeight: 50,
    marginTop: '4%',
    marginBottom: '2%',
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  button: {
    marginHorizontal: 5,
    borderWidth: 1.3,
    borderColor: 'lightgray',
    borderRadius: 20,
  },
  focusedButton: {
    backgroundColor: '#B80000',
    color: 'white',
  },
});
