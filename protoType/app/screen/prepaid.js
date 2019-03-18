import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet, Image} from 'react-native';
import {ft, sz, gb } from '../styles/fontStylesScaled';

// get custom code
import Button from '../component/Button';
import Header from '../component/header';
import SelectedCardView from '../component/selectedCardView';
import BarCode from '../component/barCode';

const {width, height} = Dimensions.get('window');

export default class  Prepaid extends Component{
    constructor(props){
        super(props);

        this.state = {
            headerName: '',
            utilityImgBackSource: 'require("../images/utility/back/drawable-hdpi/backword.png")',
            utilityImgCloseSource: 'require("../images/utility/close/drawable-hdpi/close.png")',
            validTime: '',   
        }
    }

    // validTimeCheck(){
        
    // }

    render() {
        return(
            <View style={styles.prepaidConatiner}>
                <Header />
                <SelectedCardView containerStyle={styles.containerStyle} textStyle={styles.textStyle} balanceStyle={styles.balanceStyle} />
                <BarCode />
                <View style={styles.validTimeContainer}>
                    <Text>※ 유효시간 안에 바코드를 스캔하여 결제하세요.</Text>
                    <View style={styles.validTimeButton}>
                        <Text style={{marginRight: 15}}>02:57</Text>
                        <Image source={require('../images/utility/reload/drawable-hdpi/reset_icon.png')} />
                    </View>
                </View>
                <View style={styles.moneyButtonGnb}>
                    <Button buttonStyle={styles.moneyButton} text='잔액충전' />
                    <Button buttonStyle={styles.moneyButton} text='내역' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    prepaidConatiner: {
        flex: 1,
        alignItems: 'center',
        width:  width,
        height: height,
    },
    containerStyle: {
        width: width*0.6,
        height: 55,
        marginTop: 30,   
    },
    textStyle: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'yellow',
        marginLeft: 20
    },
    balanceStyle: {
        position: 'absolute',
        right: 0,
        marginRight: 20
    },
    validTimeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,

    },
    validTimeIntro: {
        
    },
    validTimeButton: {
        flexDirection: 'row',
        marginLeft: 20
    },
    moneyButtonGnb: {
        flexDirection: 'row',
        marginTop: 30,
    },
    moneyButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: 'red',
        borderWidth: 1,
        width: width*0.5,
        height: 70,
    },
});