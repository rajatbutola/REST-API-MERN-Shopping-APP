import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { login } from '../../flux/actions/authActions';
import { clearErrors } from '../../flux/actions/errorActions';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import { ILoginModal, ITarget, IAuthReduxProps } from '../../types/interfaces';

const Login = ({
  isAuthenticated,
  error,
  login,
  clearErrors,
  navigation
}:ILoginModal)=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const clearState = () => {
    setEmail('')
    setPassword('')
  
}
  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const user = { email, password };

    // Attempt to login
    login(user);
    clearState()
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal
      // if (isAuthenticated) {
      //   handleToggle();
      // }
  }, [error]);


    return (
        <View>
       <View>
       <TextInput
         placeholder="Email"
         style={styles.input}
         onChangeText={(e)=>setEmail(e)}
         value={email}
       />
        <TextInput
         placeholder="Password"
         style={styles.input}
         onChangeText={(e)=>setPassword(e) }
         secureTextEntry={true}
         value={password}
       />
       <TouchableOpacity
         style={styles.btn}
         onPress={(e)=>
          handleOnSubmit(e)
         }>
       <Text style={styles.btnText} >
           Login
           
         </Text>
       </TouchableOpacity>
       
      </View> 
      <TouchableOpacity
         style={styles.btn}
         onPress={()=>navigation.navigate('Home')}>
         <Text style={styles.btnText}>
         Home
         </Text>
       </TouchableOpacity>
      </View>

    
    );
  }
const styles = StyleSheet.create({
    input: {
      height: 60,
      padding: 8,
      margin: 5,
    },
  
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

  const mapStateToProps = (state: IAuthReduxProps) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
  });
  
  export default connect(mapStateToProps, { login, clearErrors })(Login);
  