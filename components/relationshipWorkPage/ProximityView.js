import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { black } from 'ansi-colors';

export default class ProximityView extends Component {
  render() {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.welcomeText}>How often you are scheduling 1 on 1 </Text>
        <Text style={styles.welcomeText}>How often are they scheduling 1 no 1.</Text>
        
        <Text style={styles.welcomeText}>How far you travel vs how far they travel.</Text>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello, world!</Text>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    listContainer: {
        borderWidth: 1,
        borderColor: 'black',
        margin: 20,
        paddingTop: 20
    },
    welcomeText: {
        marginLeft: 20,
        marginBottom: 20,
    }
})