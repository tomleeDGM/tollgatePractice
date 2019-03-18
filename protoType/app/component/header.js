import React, {Component} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {ft, sz, gb } from '../styles/fontStylesScaled';

// get custom code
import Button from '../component/Button';

const {width, height} = Dimensions.get('window');

export default class  header extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: this.props.title,

        }
    }
    
    render() {
        return(
            <View style={styles.headerConatiner}>
                <View style={styles.firstUtil}>
                    {/* <Button imgStyle={this.props.headerImgFirst} buttonImg={this.props.firstImgSource} /> */}
                    <Button /* imgSource={this.props.firstImgSource} */ text='back' />
                    <Text style={styles.headerTitle}>{this.state.title}</Text>
                </View>
                <View style={styles.closeBtn} >
                    <Button /* imgSource={this.props.lastImgSource} */ text='close' />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerConatiner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width:  width,
        height: height*0.2*0.6,
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: 'yellow',
    },
    firstUtil: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: height*0.2*0.6,
        width: 100,

        backgroundColor: 'gray',
    },
    headerTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    closeBtn: {
        width: 30,
        height: 30,
        // backgroundColor: 'black',
    }
    

});