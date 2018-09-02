import React, {Component} from 'react';
import {View, Text, Button,TouchableOpacity, Image , StyleSheet} from 'react-native';
import RNImagePicker from 'react-native-image-picker';
import Firebase from 'react-native-firebase';


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
      ).catch( e => {
      alert('Error');
    });

  };

  render() {
    
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri:this.state.uri}} style={styles.image} />
        <TouchableOpacity style={styles.button} onPress={()=>this.openPicker()}>
          <Text>CameraRoll</Text>
        </TouchableOpacity>

        <TouchableOpacity  style={styles.button} onPress={() => this.upload()}>
          <Text>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles= StyleSheet.create({
image:{
width:'100%',
height:200,
backgroundColor:'#EEE',
},
button:{
padding:20,
},

  });