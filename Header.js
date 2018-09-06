import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Image
          source={{
            uri:
              'https://www.mobilityprojectpt.com/wp-content/uploads/2018/03/Health-Screen-Icon.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.appName}>Mediplus</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width:'100%',
    backgroundColor: '#00bfff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 10, height: 10 },
    shadowColor: 'gray',
    shadowOpacity: 0.3,
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
  },
});
