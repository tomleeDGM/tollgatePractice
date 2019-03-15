import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {ft, sz, gb } from '../styles/fontStylesScaled';

// get custom code
import Button from '../component/Button';
import Header from '../component/header';

const {width, height} = Dimensions.get('window');

export default class  prepaid extends Component{
    constructor(props){
        super(props);

        this.state = {
            headerName: '',
            utilityImgBackSource: 'require(../images/utility/back/drawable-hdpi/backword.png)',
        }
    }

    render() {
        return(
            <View style={styles.prepaidConatiner}>
                <Header firstImgSource={this.state.utilityImgBackSource} title='CARD' headerImgFirst={styles.headerImgFirst} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    prepaidConatiner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:  width,
        height: height,
        backgroundColor: 'yellow',
    },
    headerImgFirst: {
        
    }

});