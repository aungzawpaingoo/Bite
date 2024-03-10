import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantsDetail from './screens/RestaurantsDetail';
import Fav from './screens/Fav';
import Cart from './screens/Cart';



const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>

      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="restaurantsDetail" component={RestaurantsDetail} options={{headerShown:false}} />
      <Stack.Screen name="favScreen" component={Fav} options={{headerShown:false}} />
      <Stack.Screen name="cartScreen" component={Cart} options={{headerShown:false}} />

    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
