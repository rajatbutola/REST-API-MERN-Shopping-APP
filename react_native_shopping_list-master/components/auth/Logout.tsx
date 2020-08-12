import React from 'react';
import {TouchableOpacity, StyleSheet, Button} from 'react-native'
import { connect } from 'react-redux';
import { logout } from '../../flux/actions/authActions';
import { ILogoutProps } from '../../types/interfaces';

export const Logout = ({logout,navigation}:ILogoutProps) =>{
    return (
        <TouchableOpacity
           style={styles.btn}
           onPress={
            logout
           }>
        
           <Button title='Logout' onPress={()=>navigation.navigate('Home')} />
         </TouchableOpacity>
    );
  }
const styles = StyleSheet.create({
    btn: {
      backgroundColor: '#c2bad8',
      padding: 9,
      margin: 5,
    },
    btnText: {
      color: 'darkslateblue',
      fontSize: 20,
      textAlign: 'center',
    },
  });

export default connect(
  null,
  { logout }
)(Logout);
