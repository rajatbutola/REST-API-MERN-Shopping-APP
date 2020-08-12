import React, { useState, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { register } from '../../flux/actions/authActions';
import { clearErrors } from '../../flux/actions/errorActions';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native'
import {IRegisterModal,ITarget,IAuthReduxProps} from '../../types/interfaces';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
// interface NavigationParams {
//   text: string;
// }
// type Navigation = NavigationScreenProp<NavigationState, NavigationParams>;


const Register =({isAuthenticated,error,navigation,register,clearErrors}:IRegisterModal)=> {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);

  const handleToggle = useCallback(() => {
    // Clear errors
    clearErrors();
  }, [clearErrors]);

  // const handleChangeName = (e: ITarget) => setName(e.target.value);
  // const handleChangeEmail = (e: ITarget) => setEmail(e.target.value);
  // const handleChangePassword = (e: ITarget) => setPassword(e.target.value);
  const clearState = () => {
    setName('')
    setEmail('')
    setPassword('')
  
}

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    // Create user object
    const user = {
      name,
      email,
      password
    };
     
    // Attempt to login
    register(user);
    clearState()
  };

  useEffect(() => {
    // Check for register error
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }

    // If authenticated, close modal

      // if (isAuthenticated) {
      //   handleToggle();
      // }

  }, [error]);

// toggle = () => {
//   // Clear errors
//   this.props.clearErrors();
//   this.setState({
//     msg:null,
//     name:'',
//     email:'',
//     password:''
//   })
// };
 
    return (
      <View>
         <View>
         <TextInput
           placeholder="Name"
           style={styles.input}
           onChangeText={(e) => setName(e)}
           value={name}
         />
         <TextInput
           placeholder="Email"
           style={styles.input}
           onChangeText={(e)=>setEmail(e)}
           value={email}
         />
          <TextInput
           placeholder="Password"
           style={styles.input}
           onChangeText={(e)=>setPassword(e)}
           value={password}
           secureTextEntry={true}
         />
         <TouchableOpacity
           style={styles.btn}
           onPress={(e) => 
            handleOnSubmit(e)
           }>
           <Text style={styles.btnText}>
             Register
           </Text>
         </TouchableOpacity>
       
        </View> 
        <TouchableOpacity
           style={styles.btn}
           onPress={()=>navigation.navigate('Login')}>
           <Text style={styles.btnText}>
            Already Registered?
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

const mapStateToProps =(state: IAuthReduxProps) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});

export default connect(
  mapStateToProps,
  { register, clearErrors }
)(Register);
