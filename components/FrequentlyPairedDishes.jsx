import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Checkbox } from 'react-native-paper'
import fries from '../assets/frensh-fries.jpg'
import cola from '../assets/cola.jpg'
import popcornChicken from '../assets/popCornChicken.jpg'
import salad from '../assets/salad.jpg'




const FrequentlyPairedDishes = () => {

    const [firstItem, setFirstItem] = React.useState(false);
    const [secondItem, setSecondItem] = React.useState(false);
    const [thirdItem, setThirdItem] = React.useState(false);
    const [fourthItem, setFourthItem] = React.useState(false);



    
  return (

    

    <View style={styles.container}>
        <Text style={styles.title}>Frequently Paired Dishes</Text>
        <Text style={styles.description}>Thses are the famous dishes that are currently being order along with the main dishes.</Text>

        <View style={styles.choice}>
        <Checkbox
          status={firstItem ? 'checked' : 'unchecked'} 
          onPress={() => setFirstItem(!firstItem)} 
          color='#B80000'
        />
        <Image source={cola} style={styles.image}/>
        <Text style={{marginLeft:'5%'}}>Cola</Text>
        <Text style={{marginLeft:'35%'}}>MMK 3,000</Text>
      </View>



      <View style={styles.choice}>
        <Checkbox
          status={secondItem ? 'checked' : 'unchecked'} 
          onPress={() => setSecondItem(!secondItem)} 
          color='#B80000'
        />
        <Image source={fries} style={styles.image}/>
        <Text style={{marginLeft:'5%'}}>Fries</Text>
        <Text style={{marginLeft:'35%'}}>MMK 3,000</Text>
      </View>



      <View style={styles.choice}>
        <Checkbox
          status={thirdItem ? 'checked' : 'unchecked'} 
          onPress={() => setThirdItem(!thirdItem)} 
          color='#B80000'
        />
        <Image source={popcornChicken} style={styles.image}/>
        <Text style={{marginLeft:'5%'}}>Chicken Pop</Text>
        <Text style={{marginLeft:'23%'}}>MMK 3,000</Text>
      </View>



      <View style={styles.choice}>
        <Checkbox
          status={fourthItem ? 'checked' : 'unchecked'} 
          onPress={() => setFourthItem(!fourthItem)} 
          color='#B80000'
        />
        <Image source={salad} style={styles.image}/>
        <Text style={{marginLeft:'5%'}}>Salad</Text>
        <Text style={{marginLeft:'34%'}}>MMK 3,000</Text>
      </View>

    </View>


  )
}

export default FrequentlyPairedDishes

const styles = StyleSheet.create({
    container:{
        padding:'0%',
        marginTop:'8%',
        backgroundColor:'white',
        width:'95%',
        alignSelf:'center'
    },

    image: {
        width: 60,
        height: 60,
        resizeMode: 'cover',
        borderRadius: 6,
        marginLeft:'4%',
        alignSelf:'center'
      },

      choice:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'4%'
      },

      title:{
        fontSize:18,
        fontWeight:'700',
      },
  
      description:{
        fontSize:14,
        fontWeight:'400',
        color:'gray',
        marginTop:'2%',
        marginBottom:'4%'

      }
})