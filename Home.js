import React,{Component} from 'react';
import {View,TouchableHighlight,Text} from 'react-native';


export default class Home extends React.Component{
render(){
return(
 <View style={{flex:1}}>
       <View style={{flex: 3, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Records')}>
         <View style={{width: 150, height: 150,margin: 10, backgroundColor: 'powderblue'}}
         >
           <Text style={{fontSize: 25,margin: 10}}>
           Prescription Record
           </Text>
         </View>
         </TouchableHighlight>
         <View style={{width: 150, height: 150,margin: 10, backgroundColor: 'skyblue'}}>

           <Text style={{fontSize: 25,margin: 10}}>Hospital</Text>
           <Text style={{fontSize: 25,marginLeft:10}}>Search & Review</Text>

         </View>
  
       </View>

       <View style={{flex: 3, flexDirection: 'row',justifyContent: 'center'}}>

         <View style={{width: 150, height: 150,margin: 10, backgroundColor: 'powderblue'}}>
           <Text style={{fontSize: 25,margin: 10}}>Life log</Text>
         </View>

         <View style={{width: 150, height: 150,margin: 10, backgroundColor: 'skyblue'}}>
           <Text style={{fontSize: 25,margin: 10}}>Deciese history</Text>
         </View>
       </View>

      </View>
)}}