import React, {Component} from 'react'
import {View, Button,StyleSheet, TouchableOpacity, Text} from 'react-native'
import Register from './auth/Register'
import ShoppingList from './ShoppingList'
import Item from './Item'
import { NavigationScreenProp, NavigationState } from 'react-navigation';
interface NavigationParams {
  text: string;
}
type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;

interface Props {
  navigation: any;
}

class Home extends Component<Props>{
   render(){
      return(
        <View> 
            <ShoppingList/>
            <Item/>
        <TouchableOpacity
           style={styles.btn}
           onPress={()=>this.props.navigation.navigate('Register')}>
           <Text style={styles.btnText}>
            Welcome to Shopping Cart
           </Text>
         </TouchableOpacity>
         <TouchableOpacity
           style={styles.btnLogout}
           onPress={()=>this.props.navigation.navigate('Logout')}>
           <Text style={styles.btnTextlogout}>
           Logout
           </Text>
         </TouchableOpacity>
          </View>
      )
    }
  }
  export default Home
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5,
    },
    btnLogout: {
        backgroundColor: 'darkslateblue',
        padding: 9,
        margin: 5,
      
      },
    btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center',
    },
    btnTextlogout: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
      },
  });