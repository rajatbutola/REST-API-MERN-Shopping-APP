import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';
import { addItem } from '../flux/actions/itemActions';
import { IItemModal, IItemReduxProps, ITarget} from '../types/interfaces';
const AddItem = ({isAuthenticated,addItem}:IItemModal)=>{
  const [name, setName] = useState('');


  // const handleChangeName = (e: ITarget) => setName(e.target.value);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();

    const newItem = {
      name
    };

    // Add item via addItem action
    addItem(newItem);
    // Close modal
  
  };

    return (
      <View>
        {isAuthenticated ? (
        <View>
       
        <TextInput
          placeholder="Add Item..."
          style={styles.input}
          onChangeText={(e)=>setName(e)}
          value={name}
          clearButtonMode="always"
        />
         <TouchableOpacity
          style={styles.btn}
          onPress={(e)=>handleOnSubmit(e)
          }>        
          <Text style={styles.btnText}>
            <Icon name="plus" size={20} /> Add Item
          </Text>
        </TouchableOpacity>
       </View> 
       ):
      (<Text style={styles.btnText}>Please Login to manage Item</Text>)}
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

const mapStateToProps = (state: IItemReduxProps) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(AddItem);

