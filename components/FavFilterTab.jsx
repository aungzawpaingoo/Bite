import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';

const FavFilterTab = () => {
  const [focusedButton, setFocusedButton] = useState("Favorite Dishes");

  const handleButtonPress = (buttonName) => {
    setFocusedButton(buttonName);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Favorite Dishes' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Favorite Dishes')}
          textColor={focusedButton === 'Favorite Dishes' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Favorite Dishes' && styles.focusedButton]}
        >
          Favorite Dishes
        </Button>

        <Button
          mode="outlined"
          buttonColor={focusedButton === 'Favorite Stores' ? '#B80000' : 'white'}
          onPress={() => handleButtonPress('Favorite Stores')}
          textColor={focusedButton === 'Favorite Stores' ? 'white' : 'black'}
          style={[styles.button, focusedButton === 'Favorite Stores' && styles.focusedButton]}
        >
          Favorite Dishes
        </Button>

        
      </View>
    </ScrollView>
  );
};

export default FavFilterTab;

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
