import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../flux/actions/itemActions';
import { IItemReduxProps, IShoppingList } from '../types/interfaces';

const ListItem = ({getItems,item,isAuthenticated,deleteItem}: IShoppingList)=>{
  useEffect(() => {
    getItems();
  }, [getItems]);

  const handleDelete = (id: string) => {
    deleteItem(id);
  };

  const { items } = item;
    return (  
      <TouchableOpacity style={styles.listItem}>             
        <View style={styles.listItemView}>
        {items.map(({ _id, name }) => (
               <View >
                  {isAuthenticated ? (
                    <View style={styles.iconView}>
                    <Icon
                      name="remove"
                      size={20}
                      color="firebrick"
                      onPress={() => handleDelete(_id)  
                      }
                    />
                  </View>
                   ): null}
                  <View style={styles.listItemText}> 
                  <Text style={styles.listItemText}>{name}</Text> 
                </View>
                  </View>    
             
        ))}         
        </View>
       
      </TouchableOpacity>
     
    );
  }

 


const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
   

  },
  listItemView:  {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   

  },

  listItemText: {
    fontSize: 18,
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  iconView: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: 70,
    padding: 10,
    fontSize: 18,
  },
});
const mapStateToProps = (state:IItemReduxProps) => ({
  item: state.item,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { getItems, deleteItem }
)(ListItem);
