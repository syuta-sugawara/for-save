import React ,{Component} from 'react';
import {View,FlatList,TouchableHighlight, StyleSheet,Image} from 'react-native';
import {  Button, Text } from 'native-base';
import Add from './Add';
import Firebase from 'react-native-firebase';


export default class Records extends React.Component {
state={
  data:[],
}

componentDidMount(){


  Firebase.database().ref("images").on(
    "value", d =>{  
      
        console.log(d.toJSON());
      if(d.toJSON() !== null){
        this.setState({
          data:Object.values(d.toJSON()).map(({downloadURL})=> downloadURL)
        });

      }
    });
}

  render() {
    console.log(this.state);
    return (
      <View style={styles.container}>
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          keyExtractor={key => key}
          renderItem={({item}) =>(
            <Image source={{uri:item}}
            style={{width:"100%", height:200}}/>

            )
          
          }
        />
            <Button full info onPress={() => console.log(this.props.navigation.navigate('Add'))}>
            <Text>Add</Text>
          </Button>
      </View>
  )}
}


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   
  },
});

