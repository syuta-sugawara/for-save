import React, {Component} from 'react';
import {View,TouchableOpacity, Image , StyleSheet} from 'react-native';
import { Button,Text} from 'native-base';
import RNImagePicker from 'react-native-image-picker';

import Firebase from 'react-native-firebase';
import Header from './Header';

export default class Add extends React.Component {
  state={
    uri:''
  };

 openPicker = () => {
    
RNImagePicker.showImagePicker({},res => {
  if (res.didCancel) {
    console.log('User cancelled image picker');
  }
  else if (res.error) {
    console.log('ImagePicker Error: ', res.error);
  }
  else {
    let source = { uri: res.uri };
    this.setState(source);
}
  });
};



  upload = () => {
    Firebase.storage().ref("images/"+ new Date().getTime()).putFile(this.state.uri,{ contentType: "image/jpeg" })
    .then(({downloadURL})=>Firebase.database().ref('images/'+new Date().getTime()).set({downloadURL}))
    .then(e=> {
      alert('Uploaded');
    }
      )
    .catch( e => {
      alert('Error');
    });

  };

  render() {
    
    return (
      <View style={{ flex: 1 }}>
            <View style={{alignItems: 'center', justifyContent: 'center' }}>
                <Header />
            </View>
            <View style={{flex:1}}>
                    
                    <View>
                        <Image source={{uri:this.state.uri}} style={styles.image} />
                    </View>
                    
                    <View style={{flex:1,position:'relative',alignItems: 'center', justifyContent: 'center' }}>

                          <View style={{flex:4}}>
                                
                                <TouchableOpacity style={styles.button} onPress={()=>this.takeImage()}>
                                 
                                  <Text style={styles.textStyle}>Take pictutre</Text>
                                
                                </TouchableOpacity>


                                <TouchableOpacity style={styles.button} onPress={()=>this.openPicker()}>
                        
                                   <Text style={styles.textStyle}>CameraRoll</Text>
                              
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.button}>
                        
                                    <Text style={styles.textStyle}>Recognition</Text>
                            
                                </TouchableOpacity>
                          </View>
                        
                          <View style={{flex:1,position:'absolute',bottom:0,width:'100%'}}>
                          <Button full info onPress={() => this.upload()} >
                              <Text>Add</Text>
                          </Button>
                          </View>
                    </View>
            </View>
      </View>
    );
  }
}


const styles= StyleSheet.create({
image:{
margin:10,
width:'100%',
height:200,
backgroundColor:'#EEE',
},

button:{
    backgroundColor:'#00bfff',
    alignItems: 'center',
    justifyContent:'center',
    height:60,
    width:300,
    borderRadius: 10,
    margin:10

  },
  textStyle:{
    color:'white',
  }
  });