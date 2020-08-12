import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import { Provider } from 'react-redux';
import store from './flux/store';
import Header from './components/Header';
import { loadUser } from './flux/actions/authActions';
import TabBar from './components/TabBar';


const App =() => {
  // useEffect(() => {
  //   store.dispatch(loadUser)
  // }, [])
  
    return (
      <View style={styles.container}>
       
       <Provider store={store} >
        <Header title="Shopping List" />      
        <TabBar/>
        </Provider>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

