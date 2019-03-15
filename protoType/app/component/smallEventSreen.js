import React, {Component} from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

// get custom component
import { color,  } from '../styles/fontStylesScaled';
import Button from './Button';
import SmallEventScreenImg from './smallEventScreenImg';

const {width, height} = Dimensions.get('window');


export default class smallEventScreen extends Component{
  render() {
    return (
        <>
            <View style={styles.opacityBG}></View>
            <View style={styles.smallEventContainer}>
                <View style={styles.eventImgBox}>
                    <SmallEventScreenImg style={styles.eventImg} />
                </View>
                <View style={styles.smallEventBtn}>
                    <Button buttonStyle={styles.eventBtn} textButtonStyle={styles.eventBtnText} text='오늘 하루 보지 않기'  />
                    <Button buttonStyle={styles.eventBtn} textButtonStyle={styles.eventBtnText} text='닫기'  />
                </View>
            </View>
        </>
    );
  }
}

const styles = StyleSheet.create({
    opacityBG: {
        backgroundColor: 'black',
        opacity: 0.3,
        position: 'absolute',
        left: 0,
        top: 0,
        width: width,
        height: height,
    },
    smallEventContainer: {
        width: width*0.8,
        height: height*0.6,
        backgroundColor: 'black'
    },
    eventImgBox:{
        flex: 1,
        alignItems: 'center',
    },
    eventImg:{
        flex: 1,
        width: width*0.8,
    },
    smallEventBtn:{
        flexDirection: 'row',
        justifyContent: 'center',
        width: width*0.8,
    },
    eventBtn:{
        // flex: 1,
        width: width*0.8*0.5,
        height: height*0.6*0.14,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'gray',
        borderStyle: 'solid'
    },
    eventBtnText: {
        color: 'black',
        fontSize: 16
    }

});
