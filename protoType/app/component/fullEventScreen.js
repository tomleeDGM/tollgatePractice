import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

// get custom component
import { color,  } from '../styles/fontStylesScaled';
import Button from './Button';
import FullEventScreenImg from './fullEventScreenImg';

const {width, height} = Dimensions.get('window');


export default class fullEventScreen extends Component{
  render() {
    return (
      <View style={styles.fullEventContainer}>
        <View style={styles.eventImgBox}>
            <FullEventScreenImg style={styles.eventImg} />
        </View>
        <View style={styles.fullEventBtn}>
            <Button buttonStyle={styles.eventBtn} textButtonStyle={styles.eventBtnText} text='오늘 하루 보지 않기'  />
            <Button buttonStyle={styles.eventBtn} textButtonStyle={styles.eventBtnText} text='닫기'  />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    fullEventContainer: {
        flex: 1,
        width: width,
    },
    eventImgBox:{
        flex: 1,
        alignItems: 'center',
        width: width
    },
    eventImg:{
        flex: 1,
        width: width
    },
    fullEventBtn:{
        height: height*0.1,
        flexDirection: 'row',
    },
    eventBtn:{
        height: height*0.1,
        width: width*0.5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'gray',
    },
    eventBtnText: {
        color: 'black',
        fontSize: 16
    }

});
