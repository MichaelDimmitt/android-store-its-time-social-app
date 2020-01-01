import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { black } from 'ansi-colors';
import {
    H1, H3
    /* mapPropsToStyleNames, VueNativeBase getTheme, variables, StyleProvider, connectStyle, */
} from 'native-base';
export default class ProximityView extends Component {
  render() {
    return (
      <View style={styles.listContainer}>
        <View style={styles.welcomeText}>
            <H3 >How often you are scheduling 1 on 1:</H3>
            <View style={styles.flex}>
                <View style={styles.box}>
                    <Text>Fred</Text>
                    <H1 style={styles.card}>3</H1>
                </View>
                <Text>    </Text>
                <View>
                    <Text>John </Text>
                    <H1 style={styles.card}>2</H1>
                </View>
                <Text>    </Text>
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text>Madison</Text>
                    <H1 style={styles.card}>6</H1>
                </View>
            </View>
        </View>
        <View style={styles.welcomeText}>
            <H3 style={{paddingBottom: 5}}>How often are they scheduling 1 on 1:</H3>
            <View style={styles.flex}>
                <View>
                    <Text>Fred</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View>
                    <Text>John </Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text>Madison</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
            </View>
        </View>
        <View style={styles.welcomeText}>
            <H3 style={{paddingBottom: 5}}>How far you travel:</H3>
            <View style={styles.flex}>
                <View>
                    <Text>Fred</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View>
                    <Text>John </Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text>Madison</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
            </View>
        </View>
        <View style={styles.welcomeText}>
            <H3 style={{paddingBottom: 5}}>How far they travel:</H3>
            <View style={styles.flex}>
                <View>
                    <Text>Fred</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View>
                    <Text>John </Text>
                    <H1 style={styles.card}>43</H1>
                </View>
                <Text>    </Text>
                <View style={{justifyContent: 'center', alignSelf: 'center'}}>
                    <Text>Madison</Text>
                    <H1 style={styles.card}>43</H1>
                </View>
            </View>
        </View>

        {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello, world!</Text>
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    listContainer: {
        paddingTop: 20
    },
    welcomeText: {
        marginLeft: 20,
        marginBottom: 20,
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        borderWidth: 1,borderColor: 'black', borderRadius: 10,
        alignSelf: 'center',
        textAlign: 'center',
        minWidth: 40
    }
})