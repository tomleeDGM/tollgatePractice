/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,  SafeAreaView, Text, } from 'react-native';


// get my code
import FullEventScreen from './app/component/fullEventScreen';
import SmallEventScreen from './app/component/smallEventSreen';
import Prepaid from './app/screen/prepaid';

export default class App extends Component{
  render() {
    return (
      <SafeAreaView style={styles.container}>
        {/* <FullEventScreen/> */}
        {/* <SmallEventScreen /> */}
        <Prepaid />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'yellow',
    position: 'relative'
  },
});
