import React from 'react';
import {View, Text, TouchableOpacity, Dimensions, } from 'react-native';
import {ft, sz, gb } from '../styles/fontStylesScaled';

const {width, height} = Dimensions.get('window');

export default class Button extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={this.props.buttonStyle} >
                    <Text style={this.props.textButtonStyle}>{this.props.text}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
