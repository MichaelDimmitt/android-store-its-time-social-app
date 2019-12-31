import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class PowerView extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcomeText}>Hello</Text>
        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello, world!</Text>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    welcomeText: {
        marginLeft: 20,
        marginBottom: 20,
    }
})