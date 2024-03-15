import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantsDetail from './screens/RestaurantsDetail';
import CategoryRouteScreen from './screens/CategoryRouteScreen';
import Fav from './screens/Fav';
import Cart from './screens/Cart';
import MenuDetail from './screens/MenuDetail';
import OrderPlacingScreen from './screens/OrderPlacingScreen';
import PaymentScreen from './screens/PaymentScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      

      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="restaurantsDetail" component={RestaurantsDetail} options={{headerShown:false}} />
      <Stack.Screen name="favScreen" component={Fav} options={{headerShown:false}} />
      <Stack.Screen name="cartScreen" component={Cart} options={{headerShown:false}} />
      <Stack.Screen name="categoryRoute" component={CategoryRouteScreen} options={{headerShown:false}} />
      <Stack.Screen name="menuDetail" component={MenuDetail} options={{headerShown:false}} />
      <Stack.Screen name="orderPlacing" component={OrderPlacingScreen} options={{headerShown:false}} />
      <Stack.Screen name="payment" component={PaymentScreen} options={{headerShown:false}} />



    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
 
});
