import React,{Component} from 'react';
import {View,TouchableHighlight,Text, StyleSheet} from 'react-native';
import { Container, Left, Body, Right, Title, Subtitle } from 'native-base';

import Header from './Header';

export default class Home extends React.Component{
render(){
return(
      
       <View style={styles.container}>
          <Header />
          
          <View style={{flex:2,alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.messageText}>
          Search recommended {"\n"}
          hospitals in your area
          </Text>
          <Text style={styles.messageText}>
          Translatable Health {"\n"}
          & medication records
          </Text>
          </View>

          <View style={{flex:4}}>
                <View style={{flex:1,flexDirection:'column' }}>
                       
                       
                          <View style={styles.buttonBox}>
                             <TouchableHighlight style={styles.button} onPress={() => this.props.navigation.navigate('Records')}>
                              <Text style={styles.textStyle}>
                                Prescription Record
                              </Text>
                              </TouchableHighlight>
                          </View>
                        
                        <View style={styles.buttonBox}>

                            <TouchableHighlight style={styles.button}>
                                <Text style={styles.textStyle}>
                                hospital Search & Review
                                </Text>
                            </TouchableHighlight>
                        </View>

                        <View style={styles.buttonBox}>
                              <TouchableHighlight style={styles.button}>
                                    <Text style={styles.textStyle}>
                                    Life log
                                    </Text>
                              </TouchableHighlight>
                        </View>

                        <View style={styles.buttonBox}>
                              <TouchableHighlight style={styles.button}>
                                  <Text style={styles.textStyle}>
                                  Deciese history
                                  </Text>
                              </TouchableHighlight>
                        </View>
                </View>
          </View>
      </View>
 
)}}

const styles = StyleSheet.create({
  messageText:{
    color:"#00bfff",
    fontSize:25,
    margin:10,
    fontWeight:'300'
  },
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  buttonBox:{
    flex:1, 
    alignItems:'center',
    justifyContent:'center',
  },
  button:{
    backgroundColor:'#00bfff',
    alignItems: 'center',
    justifyContent:'center',
    height:60,
    width:300,
    borderRadius: 10
  },
  textStyle:{
    color:'white',
    fontSize:20,

  }
 
});
