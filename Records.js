import React ,{Component} from 'react';
import {View,FlatList,TouchableHighlight, StyleSheet,Image} from 'react-native';
import {  Button, Text } from 'native-base';
import Add from './Add';
import Firebase from 'react-native-firebase';
import Header from './Header';


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
      <Header />
        <FlatList
          style={{flex:1}}
          data={this.state.data}
          keyExtractor={key => key}
          renderItem={({item}) =>(
            <View>
                  <View style={{flex:1,flexDirection:'row',margin:10,padding:20,borderBottomColor:'#00bfff',borderBottomWidth:1}}>
                      <View style={{width:100,height:100}}>
                      <Image source={{uri:item}}
                      style={{width:"100%", height:100}}/>
                      </View>
                      <View style={{width:250,padding:10,position:'relative'}}>
                      <Text style={{fontSize:30,fontWeght:100,position:'absolute',top:0,left:10}}>Medicine A</Text>
                      <Text style={{fontSize:20,fontWeght:25,position:'absolute',top:40,left:10}}>Category</Text>

                      <Text style={{fontSize:15,fontWeght:25,position:'absolute',bottom:0,left:10}} >about 1 week ago</Text>
                      </View>
                  </View>
             </View>
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
   backgroundColor:'white'
   
  },
});

